<template>
    <header>
        <div class="head-container">
            <div class="head-loge-wrap">
                <div class="head-logo"></div>
            </div>       
            <ul class="head-menu">
                <li>{{ $t('message.menu_home') }}</li>
                <li>{{ $t('message.menu_goods') }}</li>
                <li>{{ $t('message.menu_rules') }}</li>
                <li>{{ $t('message.menu_recycle') }}</li>
                <li>{{ $t('message.menu_goods_partner') }}</li>
            </ul>
            <div class="head-search">
                <Input :placeholder="$t('message.component_globalHeader_search')" style="width: auto">
                    <Icon type="ios-search" slot="suffix" />
                </Input>
            </div>
            <div class="head-user">
                <div class="head-login">
                    <span>{{ $t('message.app_login_login') }}</span>
                    <span>|</span>
                    <span>{{ $t('message.app_register_register') }}</span>
                </div>
                <Dropdown class="head-user-online">
                    <a href="javascript:void(0)">
                        <Icon type="ios-contact-outline" size="30" class="head-online-icon"/>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem  class="dropdown-item-nomail">
                            <Avatar icon="ios-person" class="head-user-avatar"/>
                            <div>186****3211</div>
                        </DropdownItem>
                        <DropdownItem><Icon type="ios-albums-outline" />{{ $t('message.component_globalHeader_my_order' )}}</DropdownItem>
                        <DropdownItem><Icon type="ios-albums-outline" />{{ $t('message.component_globalHeader_account_recharge' )}}</DropdownItem>
                        <DropdownItem class="head-user-item-left"><Icon type="ios-albums-outline" />{{ $t('message.component_globalHeader_deposit_free' )}}</DropdownItem>
                        <DropdownItem><Icon type="ios-albums-outline" />{{ $t('message.component_globalHeader_shipping_address' )}}</DropdownItem>
                        <DropdownItem><Icon type="ios-albums-outline" />{{ $t('message.component_globalHeader_quit' )}}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style lang="less" scoped>
@import "../../assets/less/main";
header{
    .size(100%, 80px);background-color:@colorBj333;
    .fz(14px);
    .head-container{.size(1200px, 100%);margin:0 auto;display: flex;
        .head-loge-wrap{
            display: flex;
            align-items: center;
            .head-logo{
                .size(288px,98px);
                background: @bg_home_logo no-repeat;
                transform: scale(0.4);
            }
        }
        .head-menu{
            .size(400px, 100%);
            display: flex;
            flex-direction: row;
            li{
                .size(25%, 100%);
                .color(@colorFont666, @colorFontFFF);
                .center(flex);
                .pointer();
            }
        }
        .head-user{
            margin-left: 70px;
            display: flex;
            align-items: center;
            .head-login{
                span{
                    .color(@colorFont666, @colorFontFFF);
                    .pointer();
                }       
            }
        }
        .head-user-online{
            .fz(14px);
            .head-user-avatar{
                margin-bottom: 4px;
            }
            i{
                margin-right: 8px;
            }
            .head-online-icon{
                color: @colorFontFFF;
            }
        }
    }
}
</style>
