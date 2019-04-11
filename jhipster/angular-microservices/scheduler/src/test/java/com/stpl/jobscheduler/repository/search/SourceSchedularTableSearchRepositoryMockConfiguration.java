package com.stpl.jobscheduler.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of SourceSchedularTableSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class SourceSchedularTableSearchRepositoryMockConfiguration {

    @MockBean
    private SourceSchedularTableSearchRepository mockSourceSchedularTableSearchRepository;

}
