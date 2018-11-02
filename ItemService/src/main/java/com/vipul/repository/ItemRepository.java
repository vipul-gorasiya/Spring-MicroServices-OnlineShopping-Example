package com.vipul.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vipul.datamodel.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
