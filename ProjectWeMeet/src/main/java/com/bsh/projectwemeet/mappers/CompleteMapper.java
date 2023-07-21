package com.bsh.projectwemeet.mappers;

import com.bsh.projectwemeet.entities.ArticleEntity;
import com.bsh.projectwemeet.models.PagingModel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CompleteMapper {

    int selectCountCategory(@Param(value = "category") String category);
    //param을 이용해 관련 카테고리만 조회해서 가져온다

    ArticleEntity[] selectCountCategoryByPage(@Param(value = "pagingModel") PagingModel pagingModel,
                                              @Param(value = "category") String category);
    //카테고리 관련 페이징을 위한 매퍼


    ArticleEntity selectArticleByIndex(@Param(value = "index") int index);
    //클릭시 해당게시물을 가기위해 index값으로 찾기위해 사용되는 매퍼

    int updateArticle(ArticleEntity article);
    //조회수 수정





}