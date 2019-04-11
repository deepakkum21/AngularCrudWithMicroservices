package com.stpl.jobscheduler.web.rest;
import com.stpl.jobscheduler.domain.SourceSchedularTable;
import com.stpl.jobscheduler.repository.SourceSchedularTableRepository;
import com.stpl.jobscheduler.repository.search.SourceSchedularTableSearchRepository;
import com.stpl.jobscheduler.web.rest.errors.BadRequestAlertException;
import com.stpl.jobscheduler.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing SourceSchedularTable.
 */
@RestController
@RequestMapping("/api")
public class SourceSchedularTableResource {

    private final Logger log = LoggerFactory.getLogger(SourceSchedularTableResource.class);

    private static final String ENTITY_NAME = "sourceSchedularTable";

    private final SourceSchedularTableRepository sourceSchedularTableRepository;

    private final SourceSchedularTableSearchRepository sourceSchedularTableSearchRepository;

    public SourceSchedularTableResource(SourceSchedularTableRepository sourceSchedularTableRepository, SourceSchedularTableSearchRepository sourceSchedularTableSearchRepository) {
        this.sourceSchedularTableRepository = sourceSchedularTableRepository;
        this.sourceSchedularTableSearchRepository = sourceSchedularTableSearchRepository;
    }

    /**
     * POST  /source-schedular-tables : Create a new sourceSchedularTable.
     *
     * @param sourceSchedularTable the sourceSchedularTable to create
     * @return the ResponseEntity with status 201 (Created) and with body the new sourceSchedularTable, or with status 400 (Bad Request) if the sourceSchedularTable has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/source-schedular-tables")
    public ResponseEntity<SourceSchedularTable> createSourceSchedularTable(@RequestBody SourceSchedularTable sourceSchedularTable) throws URISyntaxException {
        log.debug("REST request to save SourceSchedularTable : {}", sourceSchedularTable);
        if (sourceSchedularTable.getId() != null) {
            throw new BadRequestAlertException("A new sourceSchedularTable cannot already have an ID", ENTITY_NAME, "idexists");
        }
        SourceSchedularTable result = sourceSchedularTableRepository.save(sourceSchedularTable);
        sourceSchedularTableSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/source-schedular-tables/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /source-schedular-tables : Updates an existing sourceSchedularTable.
     *
     * @param sourceSchedularTable the sourceSchedularTable to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated sourceSchedularTable,
     * or with status 400 (Bad Request) if the sourceSchedularTable is not valid,
     * or with status 500 (Internal Server Error) if the sourceSchedularTable couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/source-schedular-tables")
    public ResponseEntity<SourceSchedularTable> updateSourceSchedularTable(@RequestBody SourceSchedularTable sourceSchedularTable) throws URISyntaxException {
        log.debug("REST request to update SourceSchedularTable : {}", sourceSchedularTable);
        if (sourceSchedularTable.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        SourceSchedularTable result = sourceSchedularTableRepository.save(sourceSchedularTable);
        sourceSchedularTableSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, sourceSchedularTable.getId().toString()))
            .body(result);
    }

    /**
     * GET  /source-schedular-tables : get all the sourceSchedularTables.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of sourceSchedularTables in body
     */
    @GetMapping("/source-schedular-tables")
    public List<SourceSchedularTable> getAllSourceSchedularTables() {
        log.debug("REST request to get all SourceSchedularTables");
        return sourceSchedularTableRepository.findAll();
    }

    /**
     * GET  /source-schedular-tables/:id : get the "id" sourceSchedularTable.
     *
     * @param id the id of the sourceSchedularTable to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the sourceSchedularTable, or with status 404 (Not Found)
     */
    @GetMapping("/source-schedular-tables/{id}")
    public ResponseEntity<SourceSchedularTable> getSourceSchedularTable(@PathVariable String id) {
        log.debug("REST request to get SourceSchedularTable : {}", id);
        Optional<SourceSchedularTable> sourceSchedularTable = sourceSchedularTableRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(sourceSchedularTable);
    }

    /**
     * DELETE  /source-schedular-tables/:id : delete the "id" sourceSchedularTable.
     *
     * @param id the id of the sourceSchedularTable to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/source-schedular-tables/{id}")
    public ResponseEntity<Void> deleteSourceSchedularTable(@PathVariable String id) {
        log.debug("REST request to delete SourceSchedularTable : {}", id);
        sourceSchedularTableRepository.deleteById(id);
        sourceSchedularTableSearchRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id)).build();
    }

    /**
     * SEARCH  /_search/source-schedular-tables?query=:query : search for the sourceSchedularTable corresponding
     * to the query.
     *
     * @param query the query of the sourceSchedularTable search
     * @return the result of the search
     */
    @GetMapping("/_search/source-schedular-tables")
    public List<SourceSchedularTable> searchSourceSchedularTables(@RequestParam String query) {
        log.debug("REST request to search SourceSchedularTables for query {}", query);
        return StreamSupport
            .stream(sourceSchedularTableSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
