package com.stpl.jobscheduler.repository.search;

import com.stpl.jobscheduler.domain.SourceSchedularTable;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the SourceSchedularTable entity.
 */
public interface SourceSchedularTableSearchRepository extends ElasticsearchRepository<SourceSchedularTable, String> {
}
