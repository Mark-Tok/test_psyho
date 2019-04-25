import Vue from 'vue'
import Vuex from 'vuex'
import tests from '@/js/test.js'
import result from '@/js/result.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    activeQuestionId: 0,
    activeAnswer: 0,
    answer: [0, 0, 0, 0],
    tests,
    resultNumber: null,
    result
  },
  mutations: {
    SET_ID_QUESTION (state) {
      state.tests[state.activeQuestionId++]
      switch (state.activeAnswer) {
        case 0: state.answer[0]
          break
        case 1: state.answer[0]++
          break
        case 2: state.answer[1]++
          break
        case 3: state.answer[2]++
          break
        case 4: state.answer[3]++
          break
      }
    },
    ADD_ID_QUESTION (state, id) {
      state.activeAnswer = id
    },
    RECOVERY (state) {
      state.activeQuestionId = 0
      state.resultNumber = null
    },
    RESET (state) {
      state.answer = [0, 0, 0, 0]
      state.tests[state.activeQuestionId++]
    },
    ADD_NUMBER_RESULT (state, index) {
      state.resultNumber = index
    }
  },
  getters: {
    questionsArray (state) {
      return state.tests
    },
    answerArray (state) {
      return state.answer
    },
    questionId (state) {
      return state.tests[state.activeQuestionId]
    },
    activeQuestionId (state) {
      return state.activeQuestionId
    },
    resultObj (state) {
      return state.result
    }
  },
  actions: {
    setIdQuestion ({ commit }) {
      commit('SET_ID_QUESTION')
    },
    activeAnswer ({ commit }, payload) {
      commit('ADD_ID_QUESTION', payload)
    },
    result ({ commit }, payload) {
      commit('ADD_NUMBER_RESULT', payload)
    },
    recovery ({ commit }) {
      commit('RECOVERY')
    },
    reset ({ commit }) {
      commit('RESET')
    }
  }
})
