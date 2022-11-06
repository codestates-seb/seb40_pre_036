package soybeanoil.stackoverflowClone.auth.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import soybeanoil.stackoverflowClone.auth.jwt.UserDetailService;
import soybeanoil.stackoverflowClone.response.ErrorResponse;
import soybeanoil.stackoverflowClone.user.entity.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

@Slf4j
@Component
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        log.info("# Authenticated successfully!");
        Map<String, String> body = new LinkedHashMap<>();
        UserDetailService.UserDetail userDetail = (UserDetailService.UserDetail) authentication.getPrincipal();
        body.put("email", userDetail.getEmail());
        body.put("displayName", userDetail.getDisplayName());
        new ObjectMapper().writeValue(response.getOutputStream(), body);
//        response.sendRedirect("/questions");
//        sendErrorResponse(response, authentication);
    }

//    private void sendErrorResponse(HttpServletResponse response, Authentication authentication) throws IOException {
//        Gson gson = new Gson();
////        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED);
//        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//        response.setHeader("userId", String.valueOf(((User)authentication.getPrincipal()).getUserId()));
////        response.setStatus(HttpStatus.UNAUTHORIZED.value());
////        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
//    }
}
