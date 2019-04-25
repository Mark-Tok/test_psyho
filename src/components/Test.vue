<template lang="pug">
  .test(v-if="question != questionsArray[questionsArray.length]")
   .test__inner(v-if="activeQuestionId == 0" ) 
    .test__title-cover(v-html="question.titleIntro")
    .test__intro(v-html="question.intro")
    .test__button(v-if="activeQuestionId == 0")        
      button(@click="begin()") Начать тест 
   .test__inner(v-else)
    .test__title.title-container
     .title-container
      .title-container__content
       .title-container__counter {{activeQuestionId}} / {{questionsArray.length - 1}}
       .title-container__title(v-html="question.title")   
    .test__items
     .items__container         
      .item(v-for="answer in question.answers")
       label(:for="answer.id") {{ answer.text }} 
        input(@click="check(answer.id)" :id="answer.id"  type="radio" name="radiobutton")
      .test__button(v-if="question == questionsArray[questionsArray.length - 1]") 
       button.next(@click="next()") Результат  
      .test__button(v-else)
       button.next(@click="next()") Далее   
  .result(v-else)
   .result__container
    .result__header
     .result__header-wrap
       .result__title(v-html="result.title")
    .result__content(v-html="result.content")
    .result__button
     button(@click="recovery()") Пройти еще раз
</template>

<script>
export default {
  computed: {
    questionsArray: function () {
      return this.$store.getters.questionsArray;
    },
    question: function () {
      return this.$store.getters.questionId;
    },
    activeQuestionId: function () {
      return this.$store.getters.activeQuestionId;
    },
    result: function () {
      let index = this.$store.getters.answerArray.indexOf(Math.max(...this.$store.getters.answerArray));
      switch (index) {
        case 0:
          this.$store.dispatch('result', index)
          return this.$store.getters.resultObj.one;
        case 1:
          this.$store.dispatch('result', index)
          return this.$store.getters.resultObj.two;
        case 2:
          this.$store.dispatch('result', index)
          return this.$store.getters.resultObj.three;
        case 3:
          this.$store.dispatch('result', index)
          return this.$store.getters.resultObj.four;
      }
    },
  },
  methods: {
    check(id) {
      this.$store.dispatch('activeAnswer', id);
      $('.next').addClass('show');
    },
    next() {
      this.$store.dispatch('setIdQuestion');
      $('input').prop('checked', false)
      $('.next').removeClass('show');
    },
    recovery() {
      this.$store.dispatch('recovery');
    },
    begin() {
      this.$store.dispatch('reset');      
    },
  }
}
</script>

<style lang="scss">

.test , .result {
    width: 500px;
    height: 300px;

    &__title {
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    padding: 20px;
    }

    &__content {
      line-height: 1.5;
    }

    &__title-cover {
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    padding: 20px;
    }

    &__intro {
    font-size: 16px;
    line-height: 1.5;
    padding: 10px;
    }

    &__button {
    display: flex;
    justify-content: center;  
    padding: 15px;

    button {
    border: none;
    background: #0051ff;
    color: white;
    font-weight: 900;
    font-size: 17px;
    width: 200px;
    height: 50px;
    cursor: pointer;
    }
  }
  .next{
    display: none;
  }
}
.show {
  display: block !important;
}

label {
    display: flex;
    flex-direction: row-reverse;
        cursor: pointer;
}

.item {
    display: flex;
    padding: 10px 0px;
}

.items__container {
    padding: 20px 20px 20px 0px;
}

</style>
