<style lang="scss">

$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
@import './theme/_variables';
@import '../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables';
@import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';
@import './theme/_bootswatch';
@import '../node_modules/sweetalert/dist/sweetalert.css';
.wrapper {
    margin-top: $navbar-height;
}

.progress-bar {
    transition: all ease 1s;
}

.item-move {
    /* applied to the element when moving */
    transition: transform .5s cubic-bezier(.55, 0, .1, 1);
}

.bounce-transition {
    display: inline-block;
    /* otherwise scale animation won't work */
}

.bounce-enter {
    animation: bounce-in .5s;
}

.bounce-leave {
    animation: bounce-out .5s;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes bounce-out {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}

.fade-enter {
    animation: fadein 0.3s ease;
}

.fade-leave {
    animation: fadeout 0.3s ease;
}

.question-list {
    padding: 1em;
    background: #f8f8f8;
    transition: all ease 0.2s;
    border-radius: 10px;
    border: solid 4px #fff;
    cursor: pointer;
    &:hover {
        border: solid 4px $gray-light;
    }
}

.question-answer-text {
    font-size: 2em;
}

.question-box {
    transition: all ease 1s;
    opacity: 1;
}

.question-sequence {
    font-size: 1.4em;
    margin-right: 0.2em;
}

@keyframes fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.progress-bar-stage1 {
    @include progress-bar-variant( mix($brand-danger, $brand-success, 100%));
}

.progress-bar-stage2 {
    @include progress-bar-variant( mix($brand-danger, $brand-success, 80%));
}

.progress-bar-stage3 {
    @include progress-bar-variant( mix($brand-danger, $brand-success, 50%));
}

.progress-bar-stage4 {
    @include progress-bar-variant( mix($brand-danger, $brand-success, 35%));
}

</style> <style> html {
    height: 100%;
}

.progress-title {
    text-align: center;
    height: 3em;
    font-size: 1.2em;
    line-height: 2em;
    font-weight: bold;
}

body {
    background: #F4F5F7;
}

.wrap {
    background: #fff;
    border-radius: 4px;
    max-width: 1080px;
    padding: 2em;
}

.list-group-item {
    transition: all 0.2s ease;
    cursor: pointer;
}


/*
 * the following styles are auto-applied to elements with
 * v-transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter,
.modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>

<template>


<modal :show="loginShow" width="400px">
    <div slot="body" class="modal-body">
      <h3>Log in</h3>

      <floatinput name="Email" placeholder="Email" icon="glyphicon-envelope" :value.sync="user.email"></floatinput>
      <floatinput name="Password" type="password" placeholder="Password" icon="glyphicon-lock" :value.sync="user.password"></floatinput>
      <a @click="loginShow=false" class="btn btn-success ">Log in</a>

      </div>

</modal>



<div id="app">
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">TEAM T</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#about">Help</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="../navbar/">Login</a></li>
                    <li class="active"><a href="./">Survey <span class="sr-only">(current)</span></a></li>
                    <li>
                        <a href="../navbar-fixed-top/"></a>
                    </li>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>

    <div class="container wrap">

        <div class="progress-title">Progress {{ currentSection+1}} / {{(sections.length)}}</div>
        <div class="progress-content">

            <div class="progress progress-striped active" style="height:3em">
                <div class="progress-bar" role="progressbar" aria-valuenow="{{currentSection}}" aria-valuemin="0" aria-valuemax="5" style="width: {{progress*20}}%;" v-bind:class="{
  'progress-bar-stage1':progress==1,
  'progress-bar-stage2': progress==2,
  'progress-bar-stage3': progress==3,
  'progress-bar-stage4': progress==4,
  'progress-bar-success': progress==5

  }">
                    <span style="font-size:3em;line-height:1.5em"> {{progress*20}}%</span>
                </div>
            </div>

        </div>

    </div>

    <br>
    <div class="container wrap">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">

                    <a @click="setSection($index)" class="list-group-item" v-for="section in sections" track-by="$index" style="cursor:pointer" v-bind:class="{'active':currentSection==i}">
             {{section.name||'empty section'}}
            </a>
                </div>

                <div class="well">
                    <button @click="currentSection--" :disabled="currentSection<=0" transition="fade" class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>

                    </button>

                    <button @click="currentSection++" :disabled="currentSection>=sections.length-1" transition="fade" class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>

                    </button>
                </div>
                <div v-show="currentSection==sections.length-1" transition="fade">
                    <hr>

                    <a @click="submit()" class="btn btn-success"> <span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Save</a>

                    <a class="btn btn-danger" @click="exit"> <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Quit
                    </a>
                    <p>{{jsonanswer}}</p>
                </div>
            </div>
            <div class="col-md-9">



                <div class="list-group question-list" v-for="question in sections[currentSection].questions" track-by="$index">

                    <div class="list-group-item-text question-box">

                        <div class="row">
                            <div class="col-md-12">

                                <span transition="bounce" v-show="change==1" style="margin-left:1em">
        <span class="question-sequence">Q{{$index+1}}:</span>
                                <question name="aaa" :options='question.options' :multiple="question.multiple" :type="question.type" :text="question.text" :value.sync="answer[currentSection][$index]"></question>
                                </span>

                            </div>


                        </div>


                    </div>
                </div>



            </div>
        </div>
    </div>
</div>

</template>

<script>

var $ = require('jquery')
window.jQuery = $;
window.$ = $;

require('bootstrap')

import Question from './components/Question.vue'
import Modal from './components/Modal.vue'
import Floatinput from './components/Floatinput.vue'


export default {
    ready() {

            let url = document.location.href.split('/')
            let slug = url[url.length - 1]
            var self = this
            this.$http({
                url: 'http://api.man.land/api/' + slug,
                method: 'GET'
            }).then(function(response) {
                self.sections = response.data.questions.sections
            }, function(response) {
                // error callback
            })
        },
        data: function() {
            return {
              loginShow:true,
                alldone: false,
                currentSection: 0,
                jsonanswer: '',
                answer: {},
                change: 1,

                sections: []


            }
        },
        computed: {
            progress() {
                if (this.sections.length == 0) {
                    return 0
                }
                return parseInt(((this.currentSection + 1) / this.sections.length) * 100 / 20)
            }
        },
        methods: {
            exit() {
              swal({
                  title: "Hi,",
                  text: "Do you wanna save your data before you quit?",
                  type: "info",
                  showCancelButton: true,
                  confirmButtonColor: "#DD6B55",
                  confirmButtonText: "Yes save it!",
                  cancelButtonText: "No!",
                  closeOnConfirm: false,
                  closeOnCancel: true
              }, (isConfirm)=>{
                if (isConfirm) {
                  swal(' ','Data saved, you can close your window now.','success')
                }
              })
            },
                submit() {
                    swal('Thank you!','We have received your feedback, thanks for your time','success')
                },
                setSection(i) {
                    this.change = 0
                    var that = this
                    setTimeout(() => {
                        this.currentSection = i
                        that.change = 1
                    }, 200);

                }
        },
        components: {
            Question,Modal,Floatinput
        }
}

</script>
