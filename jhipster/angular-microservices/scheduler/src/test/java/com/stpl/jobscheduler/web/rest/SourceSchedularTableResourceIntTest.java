package com.stpl.jobscheduler.web.rest;

import com.stpl.jobscheduler.JobschedulerApp;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.repository.SourceSchedularTableRepository;
import com.stpl.jobscheduler.repository.search.SourceSchedularTableSearchRepository;
import com.stpl.jobscheduler.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.validation.Validator;

import java.util.Collections;
import java.util.List;


import static com.stpl.jobscheduler.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.elasticsearch.index.query.QueryBuilders.queryStringQuery;
import static org.hamcrest.Matchers.hasItem;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the SourceSchedularTableResource REST controller.
 *
 * @see SourceSchedularTableResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = JobschedulerApp.class)
public class SourceSchedularTableResourceIntTest {

    private static final Integer DEFAULT_EMP_ID = 1;
    private static final Integer UPDATED_EMP_ID = 2;

    private static final String DEFAULT_FULL_NAME = "AAAAAAAAAA";
    private static final String UPDATED_FULL_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_INDICATOR = "AAAAAAAAAA";
    private static final String UPDATED_INDICATOR = "BBBBBBBBBB";

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final Long DEFAULT_PHONE = 1L;
    private static final Long UPDATED_PHONE = 2L;

    private static final String DEFAULT_CONTACT_PREFERENCE = "AAAAAAAAAA";
    private static final String UPDATED_CONTACT_PREFERENCE = "BBBBBBBBBB";

    @Autowired
    private SourceSchedularTableRepository sourceSchedularTableRepository;

    /**
     * This repository is mocked in the com.stpl.jobscheduler.repository.search test package.
     *
     * @see com.stpl.jobscheduler.repository.search.SourceSchedularTableSearchRepositoryMockConfiguration
     */
    @Autowired
    private SourceSchedularTableSearchRepository mockSourceSchedularTableSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private Validator validator;

    private MockMvc restSourceSchedularTableMockMvc;

    private SourceSchedularTable sourceSchedularTable;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final SourceSchedularTableResource sourceSchedularTableResource = new SourceSchedularTableResource(sourceSchedularTableRepository, mockSourceSchedularTableSearchRepository);
        this.restSourceSchedularTableMockMvc = MockMvcBuilders.standaloneSetup(sourceSchedularTableResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static SourceSchedularTable createEntity() {
        SourceSchedularTable sourceSchedularTable = new SourceSchedularTable()
            .empId(DEFAULT_EMP_ID)
            .fullName(DEFAULT_FULL_NAME)
            .indicator(DEFAULT_INDICATOR)
            .email(DEFAULT_EMAIL)
            .phone(DEFAULT_PHONE)
            .contactPreference(DEFAULT_CONTACT_PREFERENCE);
        return sourceSchedularTable;
    }

    @Before
    public void initTest() {
        sourceSchedularTableRepository.deleteAll();
        sourceSchedularTable = createEntity();
    }

    @Test
    public void createSourceSchedularTable() throws Exception {
        int databaseSizeBeforeCreate = sourceSchedularTableRepository.findAll().size();

        // Create the SourceSchedularTable
        restSourceSchedularTableMockMvc.perform(post("/api/source-schedular-tables")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(sourceSchedularTable)))
            .andExpect(status().isCreated());

        // Validate the SourceSchedularTable in the database
        List<SourceSchedularTable> sourceSchedularTableList = sourceSchedularTableRepository.findAll();
        assertThat(sourceSchedularTableList).hasSize(databaseSizeBeforeCreate + 1);
        SourceSchedularTable testSourceSchedularTable = sourceSchedularTableList.get(sourceSchedularTableList.size() - 1);
        assertThat(testSourceSchedularTable.getEmpId()).isEqualTo(DEFAULT_EMP_ID);
        assertThat(testSourceSchedularTable.getFullName()).isEqualTo(DEFAULT_FULL_NAME);
        assertThat(testSourceSchedularTable.getIndicator()).isEqualTo(DEFAULT_INDICATOR);
        assertThat(testSourceSchedularTable.getEmail()).isEqualTo(DEFAULT_EMAIL);
        assertThat(testSourceSchedularTable.getPhone()).isEqualTo(DEFAULT_PHONE);
        assertThat(testSourceSchedularTable.getContactPreference()).isEqualTo(DEFAULT_CONTACT_PREFERENCE);

        // Validate the SourceSchedularTable in Elasticsearch
        verify(mockSourceSchedularTableSearchRepository, times(1)).save(testSourceSchedularTable);
    }

    @Test
    public void createSourceSchedularTableWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = sourceSchedularTableRepository.findAll().size();

        // Create the SourceSchedularTable with an existing ID
        sourceSchedularTable.setId("existing_id");

        // An entity with an existing ID cannot be created, so this API call must fail
        restSourceSchedularTableMockMvc.perform(post("/api/source-schedular-tables")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(sourceSchedularTable)))
            .andExpect(status().isBadRequest());

        // Validate the SourceSchedularTable in the database
        List<SourceSchedularTable> sourceSchedularTableList = sourceSchedularTableRepository.findAll();
        assertThat(sourceSchedularTableList).hasSize(databaseSizeBeforeCreate);

        // Validate the SourceSchedularTable in Elasticsearch
        verify(mockSourceSchedularTableSearchRepository, times(0)).save(sourceSchedularTable);
    }

    @Test
    public void getAllSourceSchedularTables() throws Exception {
        // Initialize the database
        sourceSchedularTableRepository.save(sourceSchedularTable);

        // Get all the sourceSchedularTableList
        restSourceSchedularTableMockMvc.perform(get("/api/source-schedular-tables?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(sourceSchedularTable.getId())))
            .andExpect(jsonPath("$.[*].empId").value(hasItem(DEFAULT_EMP_ID)))
            .andExpect(jsonPath("$.[*].fullName").value(hasItem(DEFAULT_FULL_NAME.toString())))
            .andExpect(jsonPath("$.[*].indicator").value(hasItem(DEFAULT_INDICATOR.toString())))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL.toString())))
            .andExpect(jsonPath("$.[*].phone").value(hasItem(DEFAULT_PHONE.intValue())))
            .andExpect(jsonPath("$.[*].contactPreference").value(hasItem(DEFAULT_CONTACT_PREFERENCE.toString())));
    }
    
    @Test
    public void getSourceSchedularTable() throws Exception {
        // Initialize the database
        sourceSchedularTableRepository.save(sourceSchedularTable);

        // Get the sourceSchedularTable
        restSourceSchedularTableMockMvc.perform(get("/api/source-schedular-tables/{id}", sourceSchedularTable.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(sourceSchedularTable.getId()))
            .andExpect(jsonPath("$.empId").value(DEFAULT_EMP_ID))
            .andExpect(jsonPath("$.fullName").value(DEFAULT_FULL_NAME.toString()))
            .andExpect(jsonPath("$.indicator").value(DEFAULT_INDICATOR.toString()))
            .andExpect(jsonPath("$.email").value(DEFAULT_EMAIL.toString()))
            .andExpect(jsonPath("$.phone").value(DEFAULT_PHONE.intValue()))
            .andExpect(jsonPath("$.contactPreference").value(DEFAULT_CONTACT_PREFERENCE.toString()));
    }

    @Test
    public void getNonExistingSourceSchedularTable() throws Exception {
        // Get the sourceSchedularTable
        restSourceSchedularTableMockMvc.perform(get("/api/source-schedular-tables/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    public void updateSourceSchedularTable() throws Exception {
        // Initialize the database
        sourceSchedularTableRepository.save(sourceSchedularTable);

        int databaseSizeBeforeUpdate = sourceSchedularTableRepository.findAll().size();

        // Update the sourceSchedularTable
        SourceSchedularTable updatedSourceSchedularTable = sourceSchedularTableRepository.findById(sourceSchedularTable.getId()).get();
        updatedSourceSchedularTable
            .empId(UPDATED_EMP_ID)
            .fullName(UPDATED_FULL_NAME)
            .indicator(UPDATED_INDICATOR)
            .email(UPDATED_EMAIL)
            .phone(UPDATED_PHONE)
            .contactPreference(UPDATED_CONTACT_PREFERENCE);

        restSourceSchedularTableMockMvc.perform(put("/api/source-schedular-tables")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedSourceSchedularTable)))
            .andExpect(status().isOk());

        // Validate the SourceSchedularTable in the database
        List<SourceSchedularTable> sourceSchedularTableList = sourceSchedularTableRepository.findAll();
        assertThat(sourceSchedularTableList).hasSize(databaseSizeBeforeUpdate);
        SourceSchedularTable testSourceSchedularTable = sourceSchedularTableList.get(sourceSchedularTableList.size() - 1);
        assertThat(testSourceSchedularTable.getEmpId()).isEqualTo(UPDATED_EMP_ID);
        assertThat(testSourceSchedularTable.getFullName()).isEqualTo(UPDATED_FULL_NAME);
        assertThat(testSourceSchedularTable.getIndicator()).isEqualTo(UPDATED_INDICATOR);
        assertThat(testSourceSchedularTable.getEmail()).isEqualTo(UPDATED_EMAIL);
        assertThat(testSourceSchedularTable.getPhone()).isEqualTo(UPDATED_PHONE);
        assertThat(testSourceSchedularTable.getContactPreference()).isEqualTo(UPDATED_CONTACT_PREFERENCE);

        // Validate the SourceSchedularTable in Elasticsearch
        verify(mockSourceSchedularTableSearchRepository, times(1)).save(testSourceSchedularTable);
    }

    @Test
    public void updateNonExistingSourceSchedularTable() throws Exception {
        int databaseSizeBeforeUpdate = sourceSchedularTableRepository.findAll().size();

        // Create the SourceSchedularTable

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSourceSchedularTableMockMvc.perform(put("/api/source-schedular-tables")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(sourceSchedularTable)))
            .andExpect(status().isBadRequest());

        // Validate the SourceSchedularTable in the database
        List<SourceSchedularTable> sourceSchedularTableList = sourceSchedularTableRepository.findAll();
        assertThat(sourceSchedularTableList).hasSize(databaseSizeBeforeUpdate);

        // Validate the SourceSchedularTable in Elasticsearch
        verify(mockSourceSchedularTableSearchRepository, times(0)).save(sourceSchedularTable);
    }

    @Test
    public void deleteSourceSchedularTable() throws Exception {
        // Initialize the database
        sourceSchedularTableRepository.save(sourceSchedularTable);

        int databaseSizeBeforeDelete = sourceSchedularTableRepository.findAll().size();

        // Delete the sourceSchedularTable
        restSourceSchedularTableMockMvc.perform(delete("/api/source-schedular-tables/{id}", sourceSchedularTable.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<SourceSchedularTable> sourceSchedularTableList = sourceSchedularTableRepository.findAll();
        assertThat(sourceSchedularTableList).hasSize(databaseSizeBeforeDelete - 1);

        // Validate the SourceSchedularTable in Elasticsearch
        verify(mockSourceSchedularTableSearchRepository, times(1)).deleteById(sourceSchedularTable.getId());
    }

    @Test
    public void searchSourceSchedularTable() throws Exception {
        // Initialize the database
        sourceSchedularTableRepository.save(sourceSchedularTable);
        when(mockSourceSchedularTableSearchRepository.search(queryStringQuery("id:" + sourceSchedularTable.getId())))
            .thenReturn(Collections.singletonList(sourceSchedularTable));
        // Search the sourceSchedularTable
        restSourceSchedularTableMockMvc.perform(get("/api/_search/source-schedular-tables?query=id:" + sourceSchedularTable.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(sourceSchedularTable.getId())))
            .andExpect(jsonPath("$.[*].empId").value(hasItem(DEFAULT_EMP_ID)))
            .andExpect(jsonPath("$.[*].fullName").value(hasItem(DEFAULT_FULL_NAME)))
            .andExpect(jsonPath("$.[*].indicator").value(hasItem(DEFAULT_INDICATOR)))
            .andExpect(jsonPath("$.[*].email").value(hasItem(DEFAULT_EMAIL)))
            .andExpect(jsonPath("$.[*].phone").value(hasItem(DEFAULT_PHONE.intValue())))
            .andExpect(jsonPath("$.[*].contactPreference").value(hasItem(DEFAULT_CONTACT_PREFERENCE)));
    }

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(SourceSchedularTable.class);
        SourceSchedularTable sourceSchedularTable1 = new SourceSchedularTable();
        sourceSchedularTable1.setId("id1");
        SourceSchedularTable sourceSchedularTable2 = new SourceSchedularTable();
        sourceSchedularTable2.setId(sourceSchedularTable1.getId());
        assertThat(sourceSchedularTable1).isEqualTo(sourceSchedularTable2);
        sourceSchedularTable2.setId("id2");
        assertThat(sourceSchedularTable1).isNotEqualTo(sourceSchedularTable2);
        sourceSchedularTable1.setId(null);
        assertThat(sourceSchedularTable1).isNotEqualTo(sourceSchedularTable2);
    }
}
