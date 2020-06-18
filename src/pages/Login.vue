<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">
          DIYShop
        </h2>
        <div class="login_header_title">
          <a
            href="javascript:"
            :class="{on: !isLogin}"
            @click="isLogin = false"
          >注册</a>
          <a
            href="javascript:"
            :class="{on: isLogin}"
            @click="isLogin = true"
          >登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on: !isLogin}">
            <section>
              <section class="login_message">
                <input
                  type="email"
                  placeholder="邮箱"
                  required
                  v-model="email"
                >
              </section>
              <section class="login_verification">
                <input
                  type="password"
                  maxlength="16"
                  minlength="8"
                  placeholder="密码"
                  required
                  v-model="password"
                  v-if="!showPwd"
                >
                <input
                  type="text"
                  maxlength="16"
                  minlength="8"
                  placeholder="密码"
                  required
                  v-model="password"
                  v-else
                >
                <div
                  class="switch_button"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div
                    class="switch_circle"
                    :class="{right: showPwd}"
                  />
                  <span class="switch_text">abc</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  type="text"
                  placeholder="昵称"
                  v-model="name"
                >
              </section>
              <section class="login_message">
                <input
                  type="text"
                  placeholder="简介"
                  v-model="bio"
                >
              </section>
            </section>
            <button
              class="login_submit"
              @click.prevent="login"
            >
              注册
            </button>
            <section class="login_hint">
              温馨提示：注册帐号代表已同意
              <a href="https://github.com/LittleControl/DIYShop">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: isLogin}">
            <section>
              <section class="login_message">
                <input
                  type="email"
                  placeholder="邮箱"
                  required
                  v-model="email"
                >
              </section>
              <section class="login_verification">
                <input
                  type="password"
                  maxlength="16"
                  minlength="8"
                  placeholder="密码"
                  required
                  v-model="password"
                  v-if="!showPwd"
                >
                <input
                  type="text"
                  maxlength="16"
                  minlength="8"
                  placeholder="密码"
                  required
                  v-model="password"
                  v-else
                >
                <div
                  class="switch_button"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div
                    class="switch_circle"
                    :class="{right: showPwd}"
                  />
                  <span class="switch_text">abc</span>
                </div>
              </section>
            </section>
            <button
              class="login_submit"
              @click.prevent="login"
            >
              登录
            </button>
          </div>
        </form>
        <a
          href="https://github.com/LittleControl/DIYShop"
          class="about_us"
        >关于我们</a>
      </div>
      <a
        href="javascript:"
        class="go_back"
        @click="$router.back()"
      >
        <i class="iconfont icon-jiantou4" />
      </a>
    </div>
    <AlterTip
      :alert-text="alertText"
      @closeTip="closeTip"
      v-show="showAlert"
    />
  </div>
</template>

<script>
import AlterTip from '../components/AlterTip'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      isLogin: true,
      showPwd: false,
      email: '',
      password: '',
      name: '',
      bio: '',
      showAlert: false,
      alertText: ''
    }
  },
  methods: {
    login() {
      const { email, password, name, bio, isLogin, resCode } = this
      if(email.length === 0 || password.length === 0) {
        this.alertText = '邮箱或密码不可以为空呀!'
        this.showAlert = true
      } else {
        let reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        if (reg.test(email)) {
          const email_b = btoa(email)
          const password_b = btoa(password)
          if(isLogin) {
            this.$store.dispatch('postUserInfo', {
              email: email_b,
              password: password_b
            })
            if(resCode === 200){
              this.alertText = '登录成功，点击跳转个人中心'
              this.showAlert = true
            }
          } else {
            this.$store.dispatch('postSignup', {
              email: email_b,
              password: password_b,
              name,
              bio
            })
            if(resCode === 200){
              this.alertText = '注册成功，点击跳转个人中心'
              this.showAlert = true
            }
          }
        } else {
          this.alertText = '请输入有效的邮箱!'
          this.showAlert = true
        }
      }
    },
    closeTip() {
      this.showAlert = false
      if(this.resCode === 200) {
        this.$router.replace('/profile')
      }
    }
  },
  components: {
    AlterTip
  },
  computed: {
    ...mapState(['resCode'])
  }
}
</script>

<style scoped lang="stylus">
.loginContainer {
  width: 100%
  height: 100%
  background: #fff

  .loginInner {
    padding-top: 60px
    width: 80%
    margin: 0 auto

    .login_header {
      .login_logo {
        font-size: 40px
        font-weight: bold
        color: #189eff
        text-align: center
      }

      .login_header_title {
        padding-top: 40px
        text-align: center

        >a {
          color: #333
          font-size: 14px
          padding-bottom: 4px

          &:first-child {
            margin-right: 40px
          }

          &.on {
            color: #189eff
            font-weight: 700
            border-bottom: 2px solid #189eff
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none

          &.on {
            display: block
          }

          input {
            width: 100%
            height: 100%
            padding-left: 10px
            box-sizing: border-box
            border: 1px solid #ddd
            border-radius: 4px
            outline: 0
            font: 400 14px Arial

            &:focus {
              border: 1px solid #02a774
            }
          }

          .login_message {
            position: relative
            margin-top: 16px
            height: 48px
            font-size: 14px
            background: #fff

            .get_verification {
              position: absolute
              top: 50%
              right: 10px
              transform: translateY(-50%)
              border: 0
              color: #ccc
              font-size: 14px
              background: transparent
            }
          }

          .login_verification {
            position: relative
            margin-top: 16px
            height: 48px
            font-size: 14px
            background: #fff

            .switch_button {
              font-size: 12px
              border: 1px solid #ddd
              border-radius: 8px
              transition: background-color 0.3s, border-color 0.3s
              padding: 0 6px
              width: 30px
              height: 16px
              line-height: 16px
              color: #fff
              position: absolute
              top: 50%
              right: 10px
              transform: translateY(-50%)

              &.off {
                background: #fff

                .switch_text {
                  float: right
                  color: #ddd
                }
              }

              &.on {
                background: #189eff
              }

              >.switch_circle {
                // transform translateX(27px)
                position: absolute
                top: -1px
                left: -1px
                width: 16px
                height: 16px
                border: 1px solid #ddd
                border-radius: 50%
                background: #fff
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition: transform 0.3s

                &.right {
                  transform: translateX(30px)
                }
              }
            }
          }

          .login_hint {
            margin-top: 12px
            color: #999
            font-size: 14px
            line-height: 20px

            >a {
              color: #189eff
            }
          }
        }

        .login_submit {
          display: block
          width: 100%
          height: 42px
          margin-top: 30px
          border-radius: 4px
          background: #189eff
          color: #fff
          text-align: center
          font-size: 16px
          line-height: 42px
          border: 0
        }
      }

      .about_us {
        display: block
        font-size: 12px
        margin-top: 20px
        text-align: center
        color: #999
      }
    }

    .go_back {
      position: absolute
      top: 5px
      left: 5px
      width: 30px
      height: 30px

      >.iconfont {
        font-size: 30px
        color: #999
      }
    }
  }
}
</style>
