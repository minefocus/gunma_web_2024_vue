<template>
  <div style="width: 100%; padding-bottom: 50px">
    <el-row>
      <el-col :xs="24" :sm="24">
        <div class="tittle_all flex_start_f">
          <img
            style="width: 40px"
            class="rending_img"
            src="../../assets/img/icon.png"
            alt=""
          />&nbsp;&nbsp;Visaデビット申込
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="0" :sm="24">
        <div
          style="
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
          "
        >
          <img
            style="width: 100%; height: 100%"
            class="rending_img"
            src="@/assets/steps/step_pc_01@3x.png"
            alt=""
          />
        </div>
      </el-col>
    </el-row>
    <el-row style="">
      <el-col :xs="24" :sm="0">
        <div
          style="
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
          "
        >
          <img
            style="width: 100%; height: 100%"
            class="rending_img"
            src="@/assets/steps/step_01@3x.png"
            alt=""
          />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24" class="padding_l_20">
        <div class="Main_title" style="width: 100%">
          口座開設される方の国籍をご選択ください
        </div>
      </el-col>
      <el-col :span="24" class="padding_l_20">
        <div class="word" style="width: 100%">
          日本国籍をお持ちでない場合、在留カードの「国籍・地域」欄に記載の国籍を入力してください。
        </div>
        <div class="word" style="width: 100%">国・地域を選択してください</div>
      </el-col>
      <el-col :xs="24" :sm="24" style="padding: 10px 20px">
        <el-select
          v-model="form.country_code"
          popper-class="customDropdown"
          :popper-append-to-body="false"
          placeholder="選択してください"
          style="width: 100%"
        >
          <el-option
            v-for="item in country_list"
            :key="item.store_number"
            :label="item.store_nm"
            :value="item.store_number"
          >
            <span
              style="
                float: left;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 100%;
              "
              >{{ item.store_nm }}</span
            >
          </el-option>
        </el-select>
      </el-col>

      <el-col :span="24" class="padding_l_20">
        <p class="p_02">お申込みの際の注意事項</p>
        <div class="tab_block">
          <div class="tab_cell_icon">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_cell word">
            <span style="font-weight: bold">郵送物について</span>
            <br />通帳・ICキャッシュカード・インターネットバンキングご契約者カードの送付方法はお客さまによって異なります。
            詳しくは<a
              target="_blank"
              font-size="0.7em"
              style="color: #000000; text-decoration: underline"
              @click="
                open('https://www.gunmabank.co.jp/kojin/apply/uketori.html')
              "
              >こちら
              <img
                style="width: 9px; height: 9px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="
              /> </a
            >。
            <!--<br>-->
            <br />※お受取りを当行が確認するまでは、入金、振込、払戻し等の取引の全部または一部を制限する場合があります。
          </div>
        </div>
      </el-col>

      <el-col :span="24" class="padding_l_20">
        <div class="tab_block">
          <div class="tab_cell_icon">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_cell word">
            <span style="font-weight: bold"
              >ぐんぎんデビット（Visa/JCB）の発行について</span
            >
            <br />ぐんぎんデビット（Visa/JCB）をお持ちでない場合、口座開設と同時に発行いただくことができます。ブランドはVisaまたはJCBをご選択ください。
            <br />なお、１口座から発行できるのは１枚のみです。別口座の場合も同一ブランドは発行できません。
          </div>
        </div>
      </el-col>

      <el-col :span="24" class="padding_l_20">
        <div class="tab_block">
          <div class="tab_cell_icon">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_cell word">
            <span style="font-weight: bold">お申込み条件について</span>
            <br />お申込みいただける方は、当行が定める地域にお住まいの個人のお客さまです。15歳以上の方は運転免許証・運転経歴証明書・マイナンバーカードのいずれかをお持ちの方が対象です。15歳未満の方は、申込者さまのマイナンバーカードまたは健康保険証と、親権者の方の運転免許証、運転経歴証明書、またはマイナンバーカードが必要です。
            <br />証券口座、外貨普通預金、外貨定期預金のお申込みは満18歳以上満75歳未満の方に限らせていただきます。
            <br />ナイスサポートカードのお申込みは満20歳以上満75歳未満の方に限らせていただきます。
          </div>
        </div>
      </el-col>

      <el-col :span="24" class="padding_l_20">
        <div class="tab_block">
          <div class="tab_cell_icon">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_cell word">
            <span style="font-weight: bold"
              >旧字体・新字体の取扱いについて</span
            >
            <br />お使いの機器により、対応していない文字（旧字体・異字体等）がある場合は、新字体でお申込み下さい。
            <br />運転免許証に記載された字体を優先して口座開設いたしますが、新字体で口座開設させていただく場合もあります。
            <br />あらかじめご了承ください。
          </div>
        </div>
      </el-col>

      <el-col :span="24" class="padding_l_20">
        <div class="tab_block">
          <div class="tab_cell_icon">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_cell word">
            <span style="font-weight: bold">転居を予定されている場合</span>
            <br />転居後にお申込みください。なお、転居前にお申込む場合は、手続きが完了するように余裕をもったお申込みをお願いします。転居後には、住所変更の届出の提出をお願いいたします。
          </div>
        </div>
      </el-col>
      <el-col :span="24" class="padding_l_20">
        <div class="Main_title" style="width: 100%">本人確認について</div>
      </el-col>
      <el-col :span="24" class="padding_l_20">
        <div class="word" style="width: 100%">
          以下の本人確認書類をご用意ください。<br />
          本人確認書類の撮影と、申込者の顔認証を行います。<br />
          ※申込者が15歳未満の場合は、親権者の顔認証を行います。<br />
          なお、外国籍のお客さまは以下確認書類のほか、在留資格に「永住者」と記載のある在留カードをご用意ください。
        </div>
        <div class="word" style="width: 100%">
          現住所の記載がある以下の本人確認書類のうちいずれかをご用意ください。
        </div>
        <div class="word" style="width: 100%">
          ・運転免許証<br />
          ・マイナンバーカード<br />
          ・運転経歴証明書
        </div>
        <img class="rending_img width_img" :src="url01" />
      </el-col>
      <el-col :span="24" class="padding_l_20">
        <div class="Main_title" style="width: 100%">居住地域について</div>
      </el-col>
      <el-col :span="24" class="padding_l_20">
        <div class="word" style="width: 100%">
          お客さまが以下の地域にお住まいの場合、当アプリから口座開設のお申込みができます。
        </div>
      </el-col>
      <el-col :span="24" class="padding_l_20">
        <table>
          <tr>
            <th>群馬県・栃木県・埼玉県・東京都</th>
            <th>全域</th>
          </tr>
          <tr>
            <th>長野県</th>
            <th>
              長野市・上田市・須坂市・小諸市・佐久市・千曲市・東御市・南佐久郡佐久穂町・北佐久郡軽井沢町・北佐久郡御代田町・埴科郡坂城町
            </th>
          </tr>
          <tr>
            <th>神奈川県</th>
            <th>
              横浜市・川崎市・相模原市・横須賀市・鎌倉市・藤沢市・厚木市・大和市・伊勢原市・海老名市・座間市・綾瀬市・逗子市・三浦市・茅ヶ崎市・平塚市・秦野市・愛川町・葉山町・寒川町・清川村
            </th>
          </tr>
          <tr>
            <th>茨城県</th>
            <th>古河市・結城市</th>
          </tr>
          <tr>
            <th>千葉県</th>
            <th>
              千葉市・野田市・流山市・柏市・我孫子市・松戸市・白井市・八千代市・習志野市・船橋市・鎌ケ谷市・市川市・浦安市
            </th>
          </tr>
        </table>
      </el-col>

      <el-col :span="24" class="padding_l_20">
        <p class="p_02">ご留意・ご同意事項</p>

        <div class="tab_block word2">
          <div class="tab_t">
            以下の項目をご確認してください。全ての項目に同意いただけない場合はお申込みができません。
          </div>
        </div>
        <br />

        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">私の居住地は日本のみです。</div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            私は、「外国政府等において重要な公的地位にある方等」に該当しません。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">私は、米国籍ではありません。</div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            米国籍の場合は、口座開設は群馬銀行の店頭で行います。(FATCA)
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            「<a
              style="color: #000000; text-decoration: underline"
              @click="
                open('https://www.gunmabank.co.jp/kitei/pdf/spapplikitei.pdf')
              "
              >ぐんぎん手続きアプリ利用規定
              <img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」、 「<a
              target="_blank"
              style="color: #000000; text-decoration: underline"
              href="javascript:void(0)"
              @click="
                open('https://www.gunmabank.co.jp/kojin/ib/af_login/kitei.html')
              "
              >各種預金規定
              <img
                class="this"
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」 、 「<a
              style="color: #000000; text-decoration: underline"
              @click="
                open(
                  'https://www.gunmabank.co.jp/kojin/benri/app/gunginid/pdf/idkitei.pdf'
                )
              "
              >ぐんぎんID利用規定<img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」に同意します
          </div>
        </div>

        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            インターネットバンキングを申込むお客さまは、 「<a
              style="color: #000000; text-decoration: underline"
              @click="
                open('https://www.gunmabank.co.jp/kitei/pdf/ib_kitei.pdf')
              "
              >インターネットバンキング利用規定
              <img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」に同意します。
          </div>
        </div>

        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            ぐんぎんデビットを申込むお客さまは、 「<a
              style="color: #000000; text-decoration: underline"
              @click="
                open(
                  'https://www.gunmabank.co.jp/kitei/pdf/debit_visa_member.pdf'
                )
              "
              >ぐんぎんVisaデビット会員規約
              <img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」または「<a
              style="color: #000000; text-decoration: underline"
              @click="
                open(
                  'https://www.gunmabank.co.jp/kitei/pdf/debit_jcb_member.pdf'
                )
              "
              >ぐんぎんＪＣＢデビット会員規約
              <img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」に同意します。
          </div>
        </div>

        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            インターネット支店の取引を申込むお客さまは、 「<a
              style="color: #000000; text-decoration: underline"
              @click="
                open('https://www.gunmabank.co.jp/kitei/pdf/netbranchkitei.pdf')
              "
              >インターネット支店取引規定
              <img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」に同意します。
          </div>
        </div>

        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            個人情報の取り扱いについて、「<a
              style="color: #000000; text-decoration: underline"
              @click="open('https://www.gunmabank.co.jp/privacy/annai2.html')"
              >利用目的説明書
              <img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >」の内容に同意します。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            今回開設しようとする口座を、当行で開設するのは初めてです。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            事業を営むための口座や、屋号の付された名義の口座を開設希望の場合は、最寄りの群馬銀行本支店で申込みを受付けします。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            普通預金の申込みの場合、ICキャッシュカード（磁気併用タイプ）を作ることに同意します。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            2021年10月1日以降、新規に開設する普通預金口座について、通帳発行・繰越をする場合には、<a
              style="color: #000000; text-decoration: underline"
              @click="open('https://www.gunmabank.co.jp/tesuryo/#hakko')"
              >所定の手数料
              <img
                style="width: 6px; height: 6px"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJBAMAAAD0ltBnAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAC4tbW4tbW4tbW4 tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbW4tbX///9WDRsmAAAADHRSTlMAQAguECDkHMjA8vBSnxKm AAAAAWJLR0QN9rRh9QAAAAd0SU1FB+YGFQgYKrP9AAUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUg eG1wAAA4jZVVS7LjIAzcc4o5ApaEBMdxgtm9qlnO8acb5+vk/eyKjYVQt1qCpH8ff9MfXhEt6VlH 1Mi+uPrJS5hkFy8e3nzTLrKN0+k0RGBvbrSU0GJds/XIpvCt3pLVWAMLi8ZqWzHHGwFVsUhEh26S 9RxV16iOhd4J5otkfvvZt1DOJSKAjfkgD133iZv7ZHIPA9uJK+y2QnKp1ktOQnIjpkmLbPh18Mm6 KJLU0AbbooXfWnWRM6wy51UG3nxinKTjJbrC1PDEEsmHWy7pCVi4rkXMzA+pSZqTTK+G4c66Ip0R 85It4CXbZBwTufGeTARPwbPvAGAUGqgPFYmKtIDA+WcWoIBSoRDibSrVoBA8rvO+JAg2AsKS1S7s Yy0o8CvfCbbdS4SxJgw7Uqngk0ke0uZrrY4hraN7PgmbnuO+D4uA/U1wDSts3alx+p70++Bs7oBe 8BkMl0KnRoIFZY9PqXdshjcKXBDEWLtCgOHnl6bMYAQHOukcZTaoKbqnlrnb6IxOUGn38FOr1Vhr ZbV9il2s2azZ7oRk2tyc4GLsZ9Qco8UE8ZmPw7ZgBj2PTgcCxk09waVgqFyCt0CDIzIT0Cjcf+y3 F2B2laUXZP0a+R0wmzfxiHhCL7N7Hej4wJg1yw+lXv1Jm6s06TttwOJHDNNBm0fkH2lzBU43bZbf ayOX8xPteTlGPtndd7fHk+hmfTp+E0Xbp978CRQ25ExH9vM7/QceNmv5K3ZbMgAAAD1JREFUCNdj YOA5AwQMUEpQx8TFxYbhTEwAA0MMw7EaMHWUp3PmzB6Go4yCQMBwlIGB9QADw6ndu3cdYAAAoN0U 1mh+6ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjFUMDg6MjQ6NDIrMDA6MDDdFXAyAAAA JXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIxVDA4OjI0OjQyKzAwOjAwrEjIjgAAABl0RVh0U29m dHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="/></a
            >がかかることに同意します。
          </div>
        </div>

        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            ぐんぎんIDを保有していない場合、口座開設と同時にぐんぎんIDを申込むことに同意します。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            ぐんぎんデビットの発行は満15歳以上（中学生は発行不可）のお客さまに限ります。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            証券口座、NISA口座、外貨普通預金口座および外貨定期預金口座のお申込みは満18歳以上満75歳未満に限ります。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            登録いただいたEメールアドレスにメールが届かない場合は、本申込は無効となることに同意します。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            お届けの住所に郵便物が未達となった場合は、本申込は無効となることに同意します。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            その他、当行が口座開設に不適当と判断した場合は、当行は本申込を謝絶します。その場合、その理由については、当行が開示しないことに同意します。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            偽造本人確認書類等により、口座を不正取得しようとした場合は、当局へ通報され書類も返却されないことに同意します。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            他人による口座の利用や譲渡は禁止されています。他人による口座の利用や譲渡を目的とした口座開設はお断りいたします。
          </div>
        </div>
        <div class="tab_block word2">
          <div class="tab">
            <img
              style="width: 12px; height: 12px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAMAAADnhAzLAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAAACo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kCo2kC o2kCo2kCo2kCo2kCo2kCo2n////wfo4CAAAAL3RSTlMABFWp5PvqtGAGPtvgRmn9/lFSEOzpDHZx ycP48PbCbW4N609TaGtE2dxHWarjrGfnC48AAAABYktHRDCu3C3kAAAAB3RJTUUH5gYVCCAKnwyc NgAAAjt6VFh0UmF3IHByb2ZpbGUgdHlwZSB4bXAAADiNlVVJktswDLzzFXkChZV8jmyJt1TlmOen mxrvniVSWaJAEA00mnT5+/tP+cUrsxc968iWNZbQOIWnSQ0Jj4weu24i+zidTkME9h5Gi6e6bVpt y2oK3xa9WMs1sdA1V9vdAm8EVMUiER26S9VzNl2zBRbGRrBYpPI7zrGncq4QAdlYDOah6zFxdZ+Z 3MLAduIKu66Q6s02r0WY3MhpUpcdvw35VF0URWpqh21R57c2XeQMq8x5lYE3nxgX2fASXWHqeGKJ 1KdbPsoTZBG6uphZPJUmZU6yvJaGu+qKckbOS/aEl+wz45zInffMRPAUPLcDABmlJvpDRrKhLCBw /jELpIBWoRESfTLVwRA8LvOxFBA2EsQyq4PY+16Q4Nd8J9h+axHGWjDcUEpDPpXJg9p66dVzSNug nk/Clse478Mi4PYmuKY5pTs5Lt8n/T44xZ3gCz6D4Urq5EiwwI/4pPrAZngjwY4gxt45AUacX0RZ kREc6KRzVClQU6in+dxtdIYSVPot/ORqNfZa2e2YZLt1mz07nFBMn5tzVW48N+o5EbvjRwUo1LQY tqZB36bazDHCXsMFZ+o6poO+ILMATef+o95egKkqK8/ItnyN/A6Y4i08Ih7Qfao3gI4PjNmzetfq NR64uVBTvuUmf5ZheeLmHvlH3FyAyxW5/T838nF+Qp4fx8gnu/vmdn8SXa0Px28hacfUmz8BpyBn OXKc3+UfFd5r8YZYG3AAAAB7SURBVBjTZdDbFkJQFIXhucumIpSSyDk6KOv93672QMNe/Xfru5sL +CYWS0OSaa3WGNvYNOZsB3E9+uW7SnaktQeCg07HECdiRThzipFwuoD+QsolRcYpQ86pQGnqUgVA rdNVLWrmG9th9+0+yeM5fUd0r7eURt8JdX0AXzIq9/iAVRcAAAAldEVYdGRhdGU6Y3JlYXRlADIw MjItMDYtMjFUMDg6MzI6MTArMDA6MDDO+sD4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIx VDA4OjMyOjEwKzAwOjAwv6d4RAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwA AAAASUVORK5CYII="
            />
          </div>
          <div class="tab_t">
            当行にお届けの住所と現在のお住まいが異なる方で、財形預金のご契約がある場合は、財形預金の変更届を職場を通じて当行へ提出していただきます。
          </div>
        </div>
      </el-col>
      <el-col :span="24" class="padding_l_20">
        <div class="Outer_frame">
          <p
            style="
              margin-left: 0px;
              font-size: 1em;
              margin-top: 20px;
              font-weight: bold;
              line-height: 30px;
              color: #02a369;
            "
          >
            反社会的勢力ではないことの表明・確約に関する同意
          </p>

          <div class="tab_block">
            <div class="tab_cell">
              私（契約者が法人の場合には当該法人の役員等を含む。以下同じ。）は、次の①に定める暴力団員等または①の各号のいずれかに該当し、もしくは②の各号のいずれかに該当する行為をし、または①にもとづく表明・確約に関して虚偽の申告をしたことが判明した場合には、貴行からの通知によりこの契約が解約されても異議を申しません。また、これにより損害が生じた場合でも、いっさい私の責任とします。
            </div>
          </div>
          <br />
          <div class="tab_cell_icon">①</div>
          <div class="tab_cell">
            貴行との取引に際し、現在、暴力団、暴力団員、暴力団員でなくなった時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団等、その他これらに準ずる者（以下これらを「暴力団員等」という。）に該当しないこと、および次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約いたします。
          </div>
        </div>
        <br />
        <div class="tab_block">
          <div class="tab_cell_icon">A</div>
          <div class="tab_cell">
            暴力団員等が経営を支配していると認められる関係を有すること
          </div>
        </div>

        <div class="tab_block">
          <div class="tab_cell_icon">B</div>
          <div class="tab_cell">
            暴力団員等が経営に実質的に関与していると認められる関係を有すること
          </div>
        </div>
        <div class="tab_block">
          <div class="tab_cell_icon">C</div>
          <div class="tab_cell">
            私もしくは第三者の不正の利益を図る目的または第三者に損害を加える目的をもってするなど、不当に暴力団員等を利用していると認められる関係を有すること
          </div>
        </div>
        <div class="tab_block">
          <div class="tab_cell_icon">D</div>
          <div class="tab_cell">
            暴力団員等に対して資金等を提供し、または便宜を供与するなどの関与をしていると認められる関係を有すること
          </div>
        </div>
        <div class="tab_block">
          <div class="tab_cell_icon">E</div>
          <div class="tab_cell">
            役員または経営に実質的に関与している者が暴力団員等と社会的に非難されるべき関係を有すること
          </div>
        </div>
        <br />
        <div class="tab_block">
          <div class="tab_cell_icon">②</div>
          <div class="tab_cell">
            自らまたは第三者を利用して次の各号に該当する行為を行わないことを確約いたします。
          </div>
        </div>
        <br />
        <div class="tab_block">
          <div class="tab_cell_icon">A</div>
          <div class="tab_cell">暴力的な要求行為</div>
        </div>
        <div class="tab_block">
          <div class="tab_cell_icon">B</div>
          <div class="tab_cell">法的な責任を超えた不当な要求行為</div>
        </div>
        <div class="tab_block">
          <div class="tab_cell_icon">C</div>
          <div class="tab_cell">
            取引に関して、脅迫的な言動をし、または暴力を用いる行為
          </div>
        </div>
        <div class="tab_block">
          <div class="tab_cell_icon">D</div>
          <div class="tab_cell">
            風説を流布し、偽計を用いまたは威力を用いて貴行の信用を毀損し、または貴行の業務を妨害する行為
          </div>
        </div>
        <div class="tab_block">
          <div class="tab_cell_icon">E</div>
          <div class="tab_cell">その他前各号に準ずる行為</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        class="flex_center"
        style="background-color: #f6f6f6; height: 40px; margin: 10px 0"
      >
        <el-checkbox v-model="checked"
          >上記内容を確認し、すベて同意する</el-checkbox
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        style="
          background-color: #edfbf2;
          height: 50px;
          padding: 10px;
          color: #74be9e;
          margin-bottom: 20px;
        "
      >
        上記事項を確認，同意のうえ、<br />
        以下のボタンで入カ画面へお進みください。
      </el-col>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-col :xs="24" :sm="24" class="flex_center">
        <van-button
          class="flex_center button_All position_R"
          type="primary"
          @click="nextPage()"
        >
          <span>同意して申し込む</span>
          <span class="position_L">〉</span>
        </van-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { isEmpty, validMailAddress } from "@/utils/validate.js";
import {
  MESSAGE,
  showMessage,
  popMessageFromApi,
  ErrMessage
} from "@/utils/message.js";
import { startLoading, endLoading } from "@/utils/loading";
import {
  AGREE_INIT_POST,
  GET_DOCUMENTS,
  UPT_AGREEN_AT
} from "@/api/account/api.js";
import urlImage01 from "@/assets/img/img_driver_01@3x.png";
import { country } from "@/utils/constants.js";
import myMixin from "../mixin.js";
export default {
  data() {
    return {
      url01: urlImage01,
      email: "",
      DomList: [],
      checkList: [],
      seq_no: "",
      url: "",
      checked: false,
      documentUrl07: "",
      documentUrl08: "",
      form: {
        country_code: ""
      },
      country_list: country
    };
  },
  computed: {
    ...mapGetters("user", ["getSeqNo"])
  },
  mixins: [myMixin],
  mounted() {
    if (!this.$store.state.page.isPc) {
      this.url = this.$route.fullPath;
      if (this.$route.query.hasOwnProperty("seq_no")) {
        if (!isEmpty(this.$route.query.seq_no)) {
          this.seq_no = decodeURIComponent(this.$route.query.seq_no);
        }
      }
      this.setSeq();
    }
  },
  methods: {
    ...mapMutations({ setState: "user/setState" }),
    setSeq() {
      this.setSeqNo(this.seq_no);
      this.InitAgree();
    },
    ...mapMutations({ setSeqNo: "user/setSeqNo" }),
    open(url) {
      window.open(url, "_blank");
    },
    nextPage() {
      try {
        if (!this.checked) {
          showMessage(MESSAGE.MSGTypeError, MESSAGE.MsgErrCheck017);
          return;
        }
         this.setState({
                country_code: this.form.country_code
          });
         this.toPage();
         
      } catch (error) {}
    },
    InitAgree() {
      let params = {
        seq_no: this.getSeqNo
      };
      startLoading();
      AGREE_INIT_POST(params)
        .then(res => {
          if (!res.success) {
            this.openMsg(res);
          }
          endLoading();
        })
        .catch(err => {
          endLoading();
        });
    },
    openMsg(res) {
      ErrMessage(res, () => {
        this.$router.push({ name: "registerMail", params: {} });
      });
    },
    toPage() {
      this.$router.push({
        name: "explanation",
        params: {}
      });
    }
  }
};
</script>

<style scoped>
.word2 {
  display: flex !important;
}
table {
  width: 100%;
  border-collapse: collapse;
}

.tab_t {
  font-size: 14px;
  display: table-cell;
  padding-left: 5px;
}
td,
th {
  border: 1px solid #efefef;
}
tr th:first-child {
  background-color: #eafaec;
  width: 40%;
}
th {
  font-weight: 100;
  text-align: left;
  vertical-align: top;
  padding: 5px;
}
.width_img {
  width: 100%;
  padding-top: 15px;
}
p {
  word-wrap: break-word;
  line-height: 30px;
}

.Outer_frame1 {
  box-sizing: border-box;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}

p {
  font-size: 0.8em;
}

.tab_block {
  font-size: 14px;
  display: table;
  margin-top: 10px;
}

.tab_cell_icon {
  display: table-cell;
}

.tab_cell {
  display: table-cell;
  padding-left: 5px;
}

.Orange {
  color: #fc8b32;
  margin-top: 5%;
}

.Outer_frame1 button {
  height: 60px;
  width: 76%;
  margin-left: 12%;
  background-color: #1dad79;
  color: #ffffff;
  font-size: 19px;
  border-color: #afafaf;
  border-radius: 3px;
  margin-bottom: 30px;
}
.Main_title {
  margin-left: 0px;
  font-size: 14px;
  margin-top: 10px;
  line-height: 30px;
  color: #02a369;
  font-weight: bold;
}
.word {
  color: #000;
  line-height: 20px;
  font-size: 14px;
  margin-top: 10px;
}
.top_waring {
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
  font-size: 14px;
}
.button_02 {
  width: 210px;
  border-radius: 5px !important;
  height: 35px !important;
}
.check_tittle {
  width: 100%;
  font-weight: bold;
}
.margin_top_down {
  /* margin: 20px 0 10px 0; */
}
.checkbox_wi_mar {
  width: 100%;
  margin-bottom: 16px;
}
.margin_top_50 {
  margin-top: 50px;
}
.btn_w {
  display: none !important;
  color: rgb(255, 255, 255);
  font-size: 10px;
  position: absolute;
  background-color: #ef7700;
  top: 0;
  right: 0;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
}
.p_02 {
  margin-left: 0px;
  font-size: 14px;
  margin-top: 20px;
  line-height: 30px;
  color: #02a369;
  font-weight: bold;
}
.btn_w_p {
  display: none !important;
  color: rgb(255, 255, 255);
  font-size: 10px;
  position: absolute;
  background-color: #ff1109;
  top: 0;
  right: 0;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
}
.button_ {
  min-height: 40px;
  padding: 15px 5px;
  height: 58px !important;
  position: relative;
  border: 1px solid #f2f2f2 !important;
  border-radius: 0 !important;
}

.btn_font {
  color: #007bf5;
  font-weight: bold;
  border-bottom: 1px solid #007bf5;
  font-size: 16px;
  font-weight: bolder;
}

@media screen and (max-width: 767px) {
  .btn_font {
    font-size: 14px !important;
  }
  .font_16 {
    font-size: 14px !important;
  }
  /* .backcolor{
    margin: 10px 0;
  } */
  .redio_center {
    display: flex;
    justify-content: center;
  }

  .date_input_e {
    display: none;
  }

  .button_ {
    width: 100%;
  }
  .m_b_15px {
    margin-bottom: 15px;
  }
}

@media screen and (min-width: 768px) {
  /* .backcolor{
    margin: 20px 0;
  } */
  .date_input_a {
    display: none;
  }

  .button_ {
    width: 90%;
  }
}

/deep/.el-checkbox__label {
  width: 95%;
  display: inline-grid;
  white-space: pre-line;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 20px;
}

.font_16 {
  font-size: 14px;
}

.padding_l_20 {
  padding: 0 20px;
}
.backcolor {
  background-color: #fafafa;
  border-radius: 5px;
}
/* .el-checkbox{
    color: #01216b !important;
  } */

/deep/ .el-select-dropdown.customDropdown {
  width: 95%;
}
/* /deep/ .el-select-dropdown.customDropdown .el-select-dropdown__item {
    display: inline-block;
    width: 100%;
    overflow: initial;
} */
</style>
