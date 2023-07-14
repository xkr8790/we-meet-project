package com.bsh.projectwemeet.mappers;

import com.bsh.projectwemeet.entities.ProfileEntity;
import com.bsh.projectwemeet.entities.RegisterContactCodeEntity;
import com.bsh.projectwemeet.entities.UserEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ProfileMapper {
    int insertProfile(ProfileEntity profile);

    int insertContactCode(RegisterContactCodeEntity registerContactCode);

    UserEntity selectAll(@Param(value = "email") String email);

    UserEntity selectUserByContact(@Param(value = "contact") String contact);
    RegisterContactCodeEntity selectContactCodeByContactCodeSalt(RegisterContactCodeEntity registerContactCode);

    int updateContactCode(RegisterContactCodeEntity registerContactCode);
}
