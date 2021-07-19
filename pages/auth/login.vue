<template>
    <div class="auth-box-w">   
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

</style>
