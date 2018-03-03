/**
 * Created by Administrator on 2018/3/3.
 */
$(function () {
    //1.校验表单
    $("form").bootstrapValidator({
       //要求： 用户名不能为空 2-6
       //  密码不能为空  密码的长度在6-12位
       //配置校验规则
       fields: {
           //对应form中的neme属性
          username:{

            //给username配置校验规则
            validators:{
                //非空的规则
                notEmpty:{
                  message: '用户名不能为空'
                },
                stringLength:{
                    min:2,
                    max:6,
                    message:'用户名长度应该在2-6位'
                }
            }
          },

          password: {
              validators:{

                  //非空的规则
                  notEmpty:{
                      message: '密码不能为空'
                  },
                  stringLength:{
                      min:6,
                      max:12,
                      message:'密码长度应该是6-12位'
                  }
              }
          }
       },

        //配置小图标, 成功 失败  校验中
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
    });
});