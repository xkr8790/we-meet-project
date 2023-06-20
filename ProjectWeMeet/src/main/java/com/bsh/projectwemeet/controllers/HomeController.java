package com.bsh.projectwemeet.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/")
public class HomeController {
    @RequestMapping(value = "/",
            method = RequestMethod.GET)
    public ModelAndView getMain(){
        ModelAndView modelAndView = new ModelAndView("home/main");
        return modelAndView;
    } //메인 홈 주소

    @RequestMapping(value = "login",method = RequestMethod.GET)
    public ModelAndView getLogin () {
        ModelAndView modelAndView = new ModelAndView("home/login");
        return modelAndView;
    } // 로그인 주소

    @RequestMapping(value="recoverAccount", method = RequestMethod.GET)
    public ModelAndView getRecoverAccount () {
        ModelAndView modelAndView = new ModelAndView("home/recoverAccount");
        return modelAndView;
    } //이메일및 비밀번호 재설정

    @RequestMapping(value = "article",method = RequestMethod.GET)
    public ModelAndView getArticle () {
        ModelAndView modelAndView = new ModelAndView("home/article");
        return modelAndView;
    } //게시판 주소로 가기


    @RequestMapping(value = "register",method = RequestMethod.GET)
    public ModelAndView getRegister () {
        ModelAndView modelAndView = new ModelAndView("home/register");
        return modelAndView;
    } //회원가입 주소로 가기

    //MVC 패턴에서 모델과 뷰는 서로 분리되어야 하고, 서로에 대한 정보를 알지 않아야 합니다. 모델은 데이터의 상태를 관리하고 비즈니스 로직을 수행하며, 뷰는 모델로부터 데이터를 가져와 표현하는 역할을 수행합니다. 이렇게 분리된 모델과 뷰는 애플리케이션의 유지 보수성과 재사용성을 향상시키는 장점을 제공합니다.


}
