package soybeanoil.stackoverflowClone.answer.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import soybeanoil.stackoverflowClone.answer.mapper.AnswerMapper;
import soybeanoil.stackoverflowClone.answer.service.AnswerService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class AnswerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // (1)
    @MockBean
    private AnswerService answerService;

    @Autowired
    private AnswerMapper answerMapper;

    @Test
    void postAnswerTest() throws Exception {
        // given

    }

    @Test
    void patchAnswer() {
    }

    @Test
    void deleteAnswer() {
    }
}