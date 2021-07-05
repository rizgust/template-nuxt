<template>
    <!-- <div class="card-box-w">   
        <div class="logo-w">
          <a href="index.html"><img alt="" src="img/logo-big.png"></a>
        </div>
        <h4 class="auth-header">
          Login Form
        </h4>
        <form action="">
          <div class="form-group">
            <RdsTextInput
              :label="'Username'"
              :placeholder="'username'">
            </RdsTextInput>
          </div>
          <div class="form-group">
            <RdsTextInput
              :label="'Password'"
              :type="'password'"
              :placeholder="'password'">
            </RdsTextInput>
          </div>
          <div class="buttons-w">
            <RdsButton :kind="'primary'" :size="'small'"> login </RdsButton>
            <div class="form-check-inline">
              <label class="form-check-label"><input class="form-check-input" type="checkbox">Remember Me</label>
            </div>
          </div>
        </form>
    </div> -->
    <div class="wrapper">
      <div class="row">
        <div class="col-sm-12">
          <div class="padding">
            <div class="box">
              <div class="box-title">
                <h5>Profile Setting</h5>
                <small>Update your login information.</small>
              </div>
              <div class="box-body">
                <form action="post">
                  <div class="form-group">
                    <label for="#" class="bx--label d-block">Username</label>
                    <!-- dummy Username -->
                    <small>admin</small>
                  </div>
                  <div class="form-group">
                    <label for="#" class="bx--label d-block">Account-ID</label>
                    <!-- dummy Username -->
                    <small>admin@account.id</small>
                  </div>
                  <div class="form-group">
                    <label for="#" class="bx--label d-block">Email</label>
                    <!-- dummy Username -->
                    <small>office@mumtaz.app</small>
                  </div>
                  <div class="form-group">
                    <RdsTextInput
                      :label="'Old Password'"
                      :type="'password'"
                      :placeholder="'Enter your old password here'">
                    </RdsTextInput>
                  </div>
                  <div class="form-group">
                    <RdsTextInput
                      :label="'Password'"
                      :type="'password'"
                      :placeholder="'Enter your password here'">
                    </RdsTextInput>
                  </div>
                  <div class="form-group">
                    <RdsTextInput
                      :label="'Repeat Password'"
                      :type="'password'"
                      :placeholder="'Enter your repeat password here'">
                    </RdsTextInput>
                  </div>
                  <div class="buttons-w">
                    <RdsButton :kind="'primary'" :size="'small'"> Update </RdsButton>
                  </div>
                </form>
              </div>
            </div>
            <div class="box">
              <div class="box-title">
                <h5>Update PIN Setting</h5>
                <small>Update your PIN information.</small>
              </div>
              <div class="box-body">
                <form action="post">
                  <div class="form-group">
                    <RdsTextInput
                      :label="'New PIN'"
                      :type="'password'"
                      :placeholder="'Enter your new pin here'">
                    </RdsTextInput>
                  </div>
                  <div class="form-group">
                    <RdsTextInput
                      :label="'Repeat New PIN'"
                      :type="'password'"
                      :placeholder="'Enter your repeat new PIN here'">
                    </RdsTextInput>
                  </div>
                  <div class="form-group">
                    <RdsTextInput
                      :label="'Password'"
                      :type="'password'"
                      :placeholder="'Enter your password here'">
                    </RdsTextInput>
                  </div>
                  <div class="buttons-w">
                    <RdsButton :kind="'primary'" :size="'small'"> Update </RdsButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { RdsButton } from '@/.design-system/core/components/rds-button/';
import { RdsTextInput } from '@/.design-system/core/components/rds-text-input/';

export default {
  components: {
    RdsButton,
    RdsTextInput
  }
};
</script>

<style lang="scss">
  body:before {
    background: #f0f0f0;
  }
  .padding{
    padding: 1.5rem;
  }
</style>
