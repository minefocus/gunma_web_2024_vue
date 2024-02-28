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
          />&nbsp;&nbsp;口座開設申込
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
            src="../../assets/steps/step_account_pc702@3x.png"
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
            src="../../assets/steps/step_account_m702@3x.png"
            alt=""
          />
        </div>
      </el-col>
    </el-row>

    <div style="width: 100%; margin-top: 25px; padding: 0 15px">
      <el-row>
        <el-col :span="24" class="padding_l_20">
          <div class="Main_title" style="width: 100%">
            メールアドレスについて
          </div>
        </el-col>
        <el-col :span="24" class="padding_l_20">
          <div class="word" style="width: 100%">
            メールアドレスをご用意ください。<br />
            申込者宛に、お申込みページのURLをお送りします。
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24" class="padding_l_20">
          <div class="Main_title" style="width: 100%;margin-top:14px">本人確認書類について</div>
        </el-col>
        <el-col :span="24" class="padding_l_20">
          <div class="word" style="width: 100%">
            現住所の記載がある以下の本人確認書類のうちいずれかをご用意ください。<br />
            ※外国籍のお客さまは、以下の本人確認書類のほか、在留資格に「永住者」と記載された在留カードが必要です。<br />
            ・運転免許証<br />
            ・マイナンバーカード<br />
            ・運転経歴証明書
          </div>
        </el-col>
      </el-row>

      <div class="Outer_frame">
        <p class="Main_title">
          お申込みから口座開設までの流れ
          <!--   <br><span class="Main_title_1">（ナイスサポートカードを除く）</span>  -->
        </p>
        <!--title_big1-->
        <div class="box">
          <div class="img_big">
            <img
              class="bg_image"
              id="bg_image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABGCAMAAACjbtfaAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABpFBMVEUAAAD8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL9pF3+zKT+17f+x5z8mUr9pF/+xZn9rGz8nVL8 kj/9v478nlP9qGX//v3/9/H+6Nb//fv/+fT8nVH9voz////+zab/+PP9rW78mkz//Pr/+fX9tXz+ zaf8l0f9u4b+6tn/9e3/7+L9uob+3sX9rG38kDv8lEH9p2P9oVn/9vD8jDT+yJ3/+vX//Pn+1rf8 kj7+5tP+x5v+27/8jzn9oFf8jjj+1bX+0rD9rm//8uj+zqn+69v+69z8jTX+5tT9w5b+4sz9w5X+ 2r3+xpv+1LP9pmL8izP9wJD/8+n+yJ78jTb+2Lr9rnH9pmH///7/8eb9o13/8+r9qmn+3cT9snf8 lUT8lkX+17lSosQQAAAAM3RSTlMANcQcowyC9vcCYeZAzs8lsBGO+o8Ebu1M2U0uvBib/Ql68wFZ 4DnIIKcNh4YDZenSxxfyyx0TAAAAAWJLR0RI8ALU6gAAAAd0SU1FB+YGFgMtJZ+Tny0AAAI6elRY dFJhdyBwcm9maWxlIHR5cGUgeG1wAAA4jZVVSZLbMAy88xV5AgWAAPkc2RJvqcoxz083NN49S6Qy xQUEGo0mXf7+/lN+8YkYRc86o0f1xdVP3sKkunjz8OG7biL7PJ1OUwTzw40zLbTZptW2qKaw7T6K 9VgDG5vGanszxxcOVbFJRKfuUvUcXdfojo2+MZgvUjn2s++hXCuMADTmkzh0PRau5onk5gZzJ+6w 6w6prdvWahGCm5FT2mTHbwOeqosiSQ0dmFu0caxdFzljVnJdZeLLFv0iGz6iK6YGWmyR+vTKR3oC FK5rEzPzp9Sk5CLT62F4q65IZ0Y+sgesZE/EkZEH30QiaAXtdgQAotBAfchIdKSFCFx/RAEIKBUK IT6SqQGGYHFZ96WAsBkglqgOYu9rQYJf8Waw/VYi9LWguyGVDjyV4EFtvdTq2aVtUM8nbsuj3/du 4XB741zDGqWbHJfvQb93TnEH+ILNpLsSmhwJNrTDP6k+YtO9keAGJ8baNQaYfn4RZQUiGNBIs1cp UFOop7c8bTSGElTGzX1ytRprray2J9nNhmXNDiMkM/JwHhIVuHXttkDVAAcFKNS0GI6mseVag40V DCh9STNJ/p4jMwGNxvNHvb0EpqqsvEQeX0d+F5jiLbwiHqK3VK8jOgbos2b1rtSrP3BzoaZ8y43/ DGF54uY+8o+4uQQu18jx/9zIx/0JeX5cI5+c7pvZ/U10nX24fgtJO5be/Ak0CjLTkeP+Lv8AOeBs Da6mQsAAAAIZSURBVFjD7djXUxNRFMDhpXfpTXoLHQIHUDDoRgycrIBCqBosgIVqixKMijTrP809 G4aAKffuvTL6kN/DZieZ72GT2cw5q2mxSkhMTNBkS0oGVnKSFE5JTQOz9NQUyzgjMwvOysrMsKaz c+BCV7It4Nw8CCsvVxDnFxRChAqL8gVwcUkpRKm0pJiny8ohRuVXY+KKSuBUWREVV1XX8DRATXVV RFxbV8/HVH1dbRhuaGwSw1RTY8NFbWsWx1Sz7RxuabWGqdaWU9zWnm5dszupo43hzq5uGUx1d3Vq dllM2TUVDRDO+/oHrl2HwSGzwRvmi2OYjjdv8bnuvD1yxzU6hmZjbnQZhnF3HCeMSXTe4/L7OAUO 1zQ783jYwY3D9O44utlhZpbL53B+YfEBhPhDr9cb5DCyxOWPHj/Bp8srIU4xvjr07Dkuc/mLl2v6 Om6E+Kau60DXbmxtr3D5q9dvAJbeRrp2kR/uHfref8CdEB/w+/27wvxjYNb56fMXdra3xw4BD/V1 yhMQ49aK88vi+weIh9L86Bil+bed7wcoz/3Bf4x/x1d/yHPH7k92o6p883Ee5/8jt6twO2c0islp NGKDWUf0weyXz+f7Hfmj4GCmPBaaQ2mPNdxj+5sjsepATvWKrQO9l7OMCKxCZbxVSm0R06KvgQUi ayCltIRSf67AOVZWYE11AdfOrf9pEus/pfTwgeI++jgB5qKzRvuPRswAAAAldEVYdGRhdGU6Y3Jl YXRlADIwMjItMDYtMjJUMDM6NDU6MzcrMDA6MDBMnvygAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIy LTA2LTIyVDAzOjQ1OjM3KzAwOjAwPcNEHAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFk eXHJZTwAAAAASUVORK5CYII="
            />
          </div>
          <div class="line"></div>
          <div class="content_big">
            <div class="title">メールアドレスの確認</div>
            <div class="word">
              入力いただいたメールアドレス宛に当行から口座開設お申込みのご案内メールを送付します。メールに記載のURLからお申込みください。
            </div>
          </div>
        </div>
        <!--title_big2-->
        <div class="box">
          <div class="img_big">
            <img
              class="bg_image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABGCAMAAACjbtfaAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACDVBMVEUAAAD8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL9pF3+zKT+17f+x5z8mUr9pF/+xZn9rGz8nVL8 kj/9v478nlP9qGX//v3/9/H+6Nb//fv/+fT8nVH9voz////+zab/+PP9rW78mkz//Pr/+fX9tXz+ zaf8l0f9u4b+6tn/9e3/7+L9uob+3sX9rG38kDv8lEH9p2P9oVn/9vD8jDT+yJ3/+vX//Pn+1rf8 kj7+5tP+x5v+27/8jzn9oFf8jjj+1bX+0rD9rm//8uj+zqn+69v+69z8jTX+5tT9w5b+4sz9w5X+ 2r3+xpv+1LP9pmL8izP9wJD/7+P/8+n+yJ78jTb+2Lr9rnH8lkb9rnD9uIL9tn79q2v8k0D+5dH+ 38b9o13//fz9tX39u4f9n1X/7N39sHT8mEn9wZL/+/n8lUP9vo39vIj8jjf///79qWb+5tL8kTz8 kDz/7eD+3cT8jzj+3MH8kDr+4cv9vYr+5M/9uoX9tHv/7d/9r3L8mUv/+/j8m0//+vf/8eb9t396 ud1NAAAAM3RSTlMANcQcowyC9vcCYeZAzs8lsBGO+o8Ebu1M2U0uvBib/Ql68wFZ4DnIIKcNh4YD ZenSxxfyyx0TAAAAAWJLR0RI8ALU6gAAAAd0SU1FB+YGFgUlHuLMgLMAAAI5elRYdFJhdyBwcm9m aWxlIHR5cGUgeG1wAAA4jZVVS7LcMAjc6xQ5ggwIpON4RvYuVVnm+OnGb/7zPrFrbBkhummQpvz9 /af84hUxip51jx7VF1c/eQuT6uLNw4dvOkW2/XQ67SKwDzdaWmizqdVmVFP4dh/FeqyBhU1jta2Z 442AqlgkortuUvUcXdfojoU+CeaLVH772bdQzhUigI35Th66HhNX92RyCwPbiSvsukJq6zZbLUJy e6RJm2z4TfCpuiiS1NAB26KN39p1kTOskvMqO958Ylxk4iW6wjTwxBKpT7d8pCdg4bo2MTN/Sk1K TjK9Hoa76op09shLtoCXbMk4EnnwTiaCp+A5DwAwCg3Uh4pER1pA4PwjC1BAqVAI8ZFKDSgEj8u8 LwWC7QFhyeoQ9r4WFPiVb4JttxJhrAXDiVQ6+FSSh7T1UqvnkDbRPZ+ELY9x34dFwPkmuIY1tm5q XL4n/T44mzugF3x2hiuhqZFgQTviU+oDm+GNAjcEMdauEWD380tTVjCCA500R5UNaoru6S13G53R CSrjFj61Wo21VlbbU+xmw7JmhxOSGbk51+xlxeYTvLoxPjtAYV8MWxM2oGBsJuYF0w4zXTV7/BWZ CWg07j/22wswu8rKC3L7GvkdMJu38Ih4QG/ZvQ50fGDMmtW7Uq/+oM1FmvKtNvIzhuVJm3vkH2lz AS5XZP1/beTj/ER7fhwjn+zum9v9SXS1Phy/haIdU2/+BBobMtOR4/wu/wAK8mvtgT8RnQAAAqRJ REFUWMPt2GdTE1EUgOGld2nSpLdQpB9FiUETIHKzYsGgogZUoiIKiogYTWgqwYYKIth7b7/Re5JA iMlm997Vb74fljvMPEw2YWfOiSAEKyQ0NETgLSwcaOFhXDgiMgpcRUdGMOOY2DhYLS42hk3HJ4BP 6+IZcGIS+JWUqBAnp6RCgFLXJyvAaekZIFFGepqczsyCIGVtCIqzc0CmnGxJnJuXL6cB8vNyA+KC wiJ5jBUVFvjh4pJSZRgrLSn21Zoy5Rgr06zB5RVsGKso9+DKjdHsmj5JVZUUV9fU8mCstqZaqOPF WJ2gRgP4802bG7dshSatq6Ztrh+6Zrxu3yHP9YaW1jbjznbiqt1EjKIo7uogu8U9xLBXlu8jnaAz 7qcns5leTKQZf9tBTPTSdUCWHySHug8fAS8/arFY3Bxae2R577Hj5ESf1csxyk9qT50mfbK8/8yA /iw55+WDer0e8N7FofNWWX5h+CJAz0ige1fywV0io5fHyBUvb7TZbFcV82t2h2F8YpKepqboxW7G pjvNdmWcrf9cous3bs44Zzm585b7qbt9h4dPkJXu3mPnc8Rb231W3i9S9uDhvG7hET3YWPk0RS2L eJqhpyFW/pgi99M9YKB3z8qXVvnyE/o6WPlT4hibc50G6R96xsp7n3sOL15SvsDKV1p+RXWXlZO/ fkO1oRv4+Nt3+F/zHvi49QPqJeDjsyP4yj8CH18cRv0J+Pj8Z3xYvgAf/+qg+psT+Pj3cXzXfvz0 JMklhhMt8UlC10mNRko4jkZ0MKsKMJj9GvUpAHYPZqrHQtdQWs+G6zV/cyRWO5BjDcrWgYZ/s4wo WIUy5VYpdYuYIL0GpihZAzFVSyj25wqcwLICC2oXcGHN+h/Fsf5jqr58wGS/+vgNzpzLKVRhMGoA AAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjJUMDU6Mzc6MzArMDA6MDAEEthNAAAAJXRFWHRk YXRlOm1vZGlmeQAyMDIyLTA2LTIyVDA1OjM3OjMwKzAwOjAwdU9g8QAAABl0RVh0U29mdHdhcmUA QWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII="
            />
          </div>
          <div class="line"></div>
          <div class="content_big">
            <div class="title">本人確認</div>
            <div class="word">
              撮影する本人確認書類を選択し、本人確認書類の撮影と顔認証を行います。申込者さまが15歳未満の場合は、親権者の方の顔認証になります。
            </div>
          </div>
        </div>
        <!--title_big3-->
        <div class="box">
          <div class="img_big">
            <img
              class="bg_image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABGCAMAAACjbtfaAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACIlBMVEUAAAD8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL9pF3+zKT+17f+x5z8mUr9pF/+xZn9rGz8nVL8 kj/9v478nlP9qGX//v3/9/H+6Nb//fv/+fT8nVH9voz////+zab/+PP9rW78mkz//Pr/+vX9tXz+ zaf8l0f9u4b+6tn/9e3/7+L9uob+3sX9rG38kDv8lEH9p2P9oVn/9vD8jDT+yJ7//Pn+1rf8kj7+ 5tP+x5v+27/8jzn9oFf8jjj+1bX+0rD9rm//8uj+zqn+69v+69z8jTX+5tT9w5b+4sz9w5X+2r3+ xpv+1LP9pmL8izP9wJD/7+P/8+n8jTb+2Lr9rnH8lUP9rW39uIL9t4D///79sXX9tHv9oFj/9Oz9 pmH+2bz+3MD+0Kz8kDr9s3n+4Mj8jjf/8OT9pWD+zqj9s3r+y6P9vIj+yqL+0q//8+r8m0//+vf9 tX3+4cv8k0D8m079tn7+2Lv+5dD9pWH/+vb9snb9vo3/8OX+yJ3+1bT9wpP9s3j+zKX9wZH+17j8 mEn/8eb9vYv8lkb9vYr8mk38nFGaqbEPAAAAM3RSTlMANcQcowyC9vcCYeZAzs8lsBGO+o8Ebu1M 2U0uvBib/Ql68wFZ4DnIIKcNh4YDZenSxxfyyx0TAAAAAWJLR0RI8ALU6gAAAAd0SU1FB+YGFgUm M4w+jwUAAAI8elRYdFJhdyBwcm9maWxlIHR5cGUgeG1wAAA4jZVVSbbjIAzc6xR9BKwRjuMEs/vv 9bKP3yWc0cmf7BcbCyGVSgWhfx9/6U9eEY3kLCNqFF9c/OQWysXZzcObb9KZt3E6nQYz7M01LRZi 2qVoj6IC3+qNtMYaWGgSq26mjjcCimARswzZuMg5qqxRHQu9ZzJfuOS3n30LyTnKDECjPhKHrPvE zX0iuYeB7ZQr9LaCi1XtVogT3IhpEuMNvw48RRZBkRLSYFvE8luqLHyGlee88MA7nxgTd7xYVpga nljC5XDzpTwGCpfVWFX9UBrTnMzyaijuIivKGTEv3gJevE3EMTO3vCcSxpPx7HsCIAoJ9CcZiYqy kCHnn1EAAlqFRrC3yVQDQ/C4zvtCIGwEiE1UO7GPvUiCX/HOZNu9RRgLYdhRSgWekuBBbbn26hhS O9TzSVh6jvs+LAL2N8El1FK6k2P6HvT74CnuAF/wGRmOQiZHjAW2x0+q99wZXpNgQxDN3lkmGH5+ EWUBIjikk8xRSYGqQD3V5m5LZyhBuN3DT65WzV5Ldtsn2aZNZ892JxTT5uZcUwXAb7ogtEHVAAcF CNS04Buaxw8XtmdTIZixClo1/Fhzpx4zZwESlvsv9faSOFWl9JK5fZ35XeIUL+UR8ZTdpnod2fGB cfasPLR69SdurtTQt9z4zxDSgZvHzD/i5pqYbpnj99zw5fyEPC/HyCe7++72eBLdrE/HLyVp+9Sb PwFLQc5yeD+/6T8W8mv14t0VbAAAAtNJREFUWMPt2OlbElEUB+Bx33PLLfcNl1zQmyamBih5JSIJ xEpUpNVsMyvTzGxP08pst4z21crS/69zhxQNhjt3pr71+3DnPDDvwwwM85wzHOcrfv7+fpzUBAQi SGCAJBwUHIL4hAYHMeOw8Ai0kojwMDYdGYXWZF0kA46OQR6JiRaJY+PikZfEr48VgRMSk5BAkhIT aDo5BflIygafODUNUZKWKojTMzJpGqHMjHSvOCs7h45JcrKzPHBuXr44TJKfl7tWKwrEY5ICxSpc WMSGSYoKf+PijaHsGv5JJcWAS8vKpWCS8rJSTikVkyg5ORohT76pqnpzDVLV8lFt4Td19WRt2Ern ao22sUm3rRnzaW7BOr1ev92Ad+iNWLOTyluxCdXpdkFlNsPSguvJqwbcAouljcqtuH33nr3IzTts NpuLo8ZOKu/qNmJ7j8PNSYDvq91/APdQ+cFDh9W9+Iib96nVakTOXX/0mIPKj584iVBnv7dzF/PD ncIDp8/gs25ePTg4eE40Hxo+rxnpvgDV6Cgsw2aSiybzsDjOlv9cIGOXLl/pq5HIbe1X+SvWfE0K v96El9PNzm/w+qaF9+PMfALULRPcfEagmGTmRoyNU6S4DfwOK78LaJqv7kE1wfzp0/0z9/niAfCH zLzLtTE9Iocxxcz5PH5Cvve2p0gaHyB69tmQHI7x8zlp/IXK+VID/lUXI3fv//oN+LeM/N37XqvB VX4A/pGRT4L55Co/+7jshPgXMFWuch7Kr4zcCUb7jVRj36FsYOQOLSDLfMf4AtGzP4S4UHPixKvy U2AnpXBrZLUvY/uC9z1IawSNWYn3xmxxhhw3nm5d9Pq2qzHz2RbOLS0JXa8rbSHflFYgplQo/mZL LLchJ6kUNw5U/pthRMQolEwbpeQNYpzwGBgnZgwkkTWEkvw5AkexjMCc3AGcWzX+h0gY/0lkPXwg oT76+AWbzs0SXuSYFQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNi0yMlQwNTozODo0OCswMDow MMwzxL4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDYtMjJUMDU6Mzg6NDgrMDA6MDC9bnwCAAAA GXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg=="
            />
          </div>
          <div class="line"></div>
          <div class="content_big">
            <div class="title">申込<br /></div>
            <div class="word">
              インターネット支店のオリジナルキャッシュカードをご希望の方は、あらかじめスマートフォンに写真を保存のうえお申込みいただくか、口座開設を申込む際にスマートフォンのカメラで撮影してください。
              <br />画面に従ってお申込み内容を入力するとお申込み完了です。
            </div>
          </div>
        </div>
        <!--title_big4-->
        <div class="box">
          <div class="img_big">
            <img
              class="bg_image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABGCAMAAACjbtfaAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABuVBMVEUAAAD8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL9pF3+zKT+17f+x5z8mUr9pF/+xZn9rGz8nVL8 kj/9v478nlP9qGX//v3/9/H+6Nb//fv/+fT8nVH9voz////+zab/+PP9rW78mkz//Pr/+vX9tXz+ zaf8l0f9u4b+6tn/9e3/7+L9uob+3sX9rG38kDv8lEH9p2P9oVn/9vD8jDT+yJ7//Pn+1rf8kj7+ 5tP+x5v+27/8jzn9oFf8jjj+1bX+0rD9rm//8uj+zqn+69v+69z8jTX+5tT9w5b+4sz9w5X+2r3+ xpv+1LP9pmL8izP9wJD/8OT/8+n8jTb+2Lr9rnH9n1b/+/n9r3L8kDz/7eD8kT3+2bz+0q/9vIn9 o1z/+vb8k0D/8OX9t3//7N39pWD8jjf+yJ/8m07HKDSYAAAAM3RSTlMANcQcowyC9vcCYeZAzs8l sBGO+o8Ebu1M2U0uvBib/Ql68wFZ4DnIIKcNh4YDZenSxxfyyx0TAAAAAWJLR0RI8ALU6gAAAAd0 SU1FB+YGFgUoGckGa10AAAI8elRYdFJhdyBwcm9maWxlIHR5cGUgeG1wAAA4jZVVS5bjIAzcc4o5 ApaEBMdxgtn1e7Oc408Vzs9J+he/xlgIVakk6PTv42/6w19ES3rWETWyL65+8hIm2cWLhzfftIts 43Q6DRHYmxstJbRY12w9sil8q7dkNdbAxqKx2lbM8UZAVWwS0aGbZD1H1TWqY6N3gvkimd9+9i2U a4kIYGM+yEPXfeHmPpncw8B24g677ZBcqvWSk5DciGnSIhv+OvhkXRRJamiDbdHCb626yBlWmesq A2+OmCfpeImuMDWM2CL56ZFLegIWrmsRM/On1CTNRaZXw/BkXZHOiPmTLeAl22QcE7nxmUwEo2Ds OwAYhQbqQ0WiIi0gcP3IAhRQKhRCvE2lGhSCx3XdlwTBRkBYstqFfawFBX7lO8G2e4kw14RpRyoV fDLJQ9p8rdVzSOvonk/CpmPc92ERsL8JrmGFrTs1Tt+Tfh+czR3QCz6D4VLo1EiwoezxKfWOzfBG gQuCGGtXCDD8/NKUGYzgQCeds8wGNUX31DJPG53RCSrtHn5qtRprray2T7GLNZs1252QTJuHc1U0 nvJpuuAlmLEDFN20GI6mVnN4AJi2BBNI4qw2jPA3eUFmAhqF54/99gLMrrL0gqxfI78DZvMmXhEH 9DK714GOD8xZs/xQ6tUP2lylSd9pg/FHDNOTNo/IP9LmCpxu2iy/10Yu9yfa83KNfHK6726PN9HN erh+E0Xbl978EyhsyJmO7Pd3+g/AnWu55l7hYwAAAltJREFUWMPt2NdTE1EUwOGld2nSpLdQpASO RsFEN0LMyQoRiKBokKJgQ6OuGogSIfZe/mLuXRgCJNl79155cMbfw2ZnZ76HTZmcs4piVlp6epoi WkYmkDIzhHBWdg4Y5WZnWcZ5+QWwV0F+njVdWAQHOlZoAReXQEIlxZy4tKwcklR+vJQDV1RWQYqq KitYuroGTKo5YYpr64BRXW1KXN/QyNIAjQ31SXFTcwsb01qamxJwa1s7H6a1t7Ue1LYOfkzrsO3D nV3WMK2rcxd3n8y1rskvqaeb4N6+fhFM6+/rVeyimGZXZDRAIj912nHmLAwNGw2dM16cLno8f4HN VffFkVHPJS8aeX3o0TTt8hiOa350X2HyCZwEp2eKnAUC5OBDF706hj5yuDrN5DN47frsDYjzm8Fg cIfDyByT35r348LiUpzTCL89fGcZF5l85e499T4+iPOHqqoCvXdt9dESkz8OPQGYe5rs3nk+uGeo P3+BL+PcEQ6H17j5euSV+/X8BjmLRskhEqC9mQxE+Li1/vOj45tb5EsbE+Vv36EMd6AMn0EZHlyQ 4e+nCfUL8w9EftRF+ScCQyui/PM44hcnCPKv34j7DoJ8fZmwMIhy+j/xY1aU/xxF3NoEQf5rlaBo jBYiZ79jfyxxFx7K+w/xjdhe5vfOHE7M3nk7ezRKzeloRAazHtPBzKfr+lqS6zuDmfRYaAylA9bw gO1vjsSyAzltkG8dGDyaZYRjFapmrVJyi5iSeg0s41kDaVJLKO3wClxkZQVWZBdwZd/6nyOw/tOk Hj7QmI8+tgHpmcNW0IAWewAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNi0yMlQwNTo0MDoyNSsw MDowMFFn+Y4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDYtMjJUMDU6NDA6MjUrMDA6MDAgOkEy AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg=="
            />
          </div>
          <div class="line"></div>
          <div class="content_big">
            <div class="title">
              書類の確認<br />
              <span class="media">（一般店舗の預金口座を選択した場合等）</span>
            </div>
            <div class="word">
              お申込み内容が印字された書類を当行から送付します。内容をご確認のうえ、ご記入および押印後、当行に返送いただきます。
            </div>
          </div>
        </div>
        <!--title_big5-->
        <div class="box">
          <div class="img_big">
            <img
              class="bg_image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABGCAMAAACjbtfaAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACClBMVEUAAAD8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8izL8 izL8izL8izL8izL8izL8izL8izL8izL8izL8izL9pF3+zKT+17f+x5z8mUr9pF/+xZn9rGz8nVL8 kj/9v478nlP9qGX//v3/9/H+6Nb//fv/+fT8nVH9voz////+zab/+PP9rW78mkz//Pr/+vX9tXz+ zaf8l0f9u4b+6tn/9e3/7+L9uob+3sX9rG38kDv8lEH9p2P9oVn/9vD8jDT+yJ7//Pn+1rf8kj7+ 5tP+x5v+27/8jzn9oFf8jjj+1bX+0rD9rm//8uj+zqn+69v+69z8jTX+5tT9w5b+4sz9w5X+2r3+ xpv+1LP9pmL8izP9wJD/7+P/8+n8jTb+2Lr9rnH/8+r+5ND9vYr9n1b8k0D/+/n8nFH9tHr9vIj/ 7uD9q2v+6Nf/+fX+yaD9snf/+vb/8OT9u4f+3cP+3sT+6dj/9u/9sXb+yqH+1rb+2bz+2Lv9q2r/ 7uH9o1z9pF78m07/+/j9pmH+4Mj+3MD9uIH9pWH+4839t3/9qWf8jjf+0a7+zqj9vYv8lUSXCuuj AAAAM3RSTlMANcQcowyC9vcCYeZAzs8lsBGO+o8Ebu1M2U0uvBib/Ql68wFZ4DnIIKcNh4YDZenS xxfyyx0TAAAAAWJLR0RI8ALU6gAAAAd0SU1FB+YGFgUpIfgf4oIAAAI7elRYdFJhdyBwcm9maWxl IHR5cGUgeG1wAAA4jZVVSZLkIAy884p5AtYKz3EV9m0i5jjPn0zctVcvU47GWAillEro8vf3n/KL v8xe9Kx7tqyxhMYpPE1qSHhk9Nh0iGz76XTaRWDvYbR4qtvQaiOrKXxb9GIt18RG11xtcwu8EVAV m0R0102qnrPpmi2wMQbBYpHK7zjHlsq1QgRkY7EzD12Phav7zOQWBrYTd9h1h1RvNrwWYXJ7TpO6 bPgbyKfqoihSUztsizq/tekiZ1hlrqvseHPEvMjAS3SFqWPEFqlPj3yUJ8gidHUxs3gqTcpcZHkt DU/VFeXsOX+yJbxkmxnnRO58ZiaCUTCOAwAZpSb6Q0ayoSwgcP0xC6SAVqEREn0y1cEQPC7rsRQQ tieIZVYHsfe9IMGv+U6w7dYizLVgOlBKQz6VyYPaeunVc0gbUM8nYctj3PdhEXC8Ca5pTulOjsv3 Sb8PTnEn+ILPznAldXIk2OBHfFJ9YDO8kWBHEGPvnAB7nF9EWZERHOikc1YpUFOop/k8bXSGElT6 LfzkajX2WtntmGS7dZs9O5xQTJ+Hc1WcN3ScmlZzw6BUgOJ7MafmtRnPQKOkC4IYzA2GgIDUlhdk FqDpPH/U2wswVWXlBdm+Rn4HTPEWXhEP6D7VG0DHB+bsWb1r9RoP3FyoKd9ys/wsw/LEzT3yj7i5 AJcrsvw/N/Jxf0KeH9fIJ6f75nZ/E12tD9dvIWnH0pt/Ak5BznLkuL/LP9fHa8Xm5FXdAAACwElE QVRYw+3Y91vTQBgH8LC3LFmyVxmyT8FiK2lL5W2sKFZFoRRZdRVFECtluFAciIqiuBBU3P6P3oXS Fts0uQR/8/vD3T1NP32Sy5On7xuGCZaQ0NAQRm7CwhFOeJgsHBEZhfhER0ZQ45jYOORJXGwMnY5P QFuyI54CJyYhvyQlSsTJKakoQFJ3JkvAaekZSCAZ6WliOjMLBUnWrqA4OweJJCdbEOfm5YtphPLz cgPigsIicUxSVFjgh4tLSqVhktKS4q1aVSYdk5SpfHB5BR0mqSh348rd0fQaP0lVlRhX19TKwSS1 NdVMnVxMUsco0Qj58z17G5v2IXUzH/V+ftJoyXigRZyzOr2h1XiwDfi0mcDIcdwhMxzm2kF3RJQf hQ6kMR7DK4sFDybQkk/NYMLD8ROi/CR0njrdhby822q1bnBk6BHltt52ONPX7+UkmA80Dw5Bnyi3 nz3HnocLXn6RZVlErp1zDPeL8kuXRxDquRLo2qXcuFEYuzoO17y80el0XpfMJ1yTuqneabyamcGD y0Jyo8Piksbp8p9vP3eCT5zUvFMZNyjjNwFuDW3mNjVvBbgjf+tm8SnPyucagLsI3Zu7P6cekcG7 AR48fMTv2/xjLTVfAHji2finZlr+jHeOxed6Mr+wUfJBjJZeYmV/RfwCJWeXp+bdfyqvMX9DyXG6 3PNbzN9R8vcr05vLD5jrKfk4rI6tuX8J80lK/tG7X6N4uUjJh7H5NEFWGg4vP1PydXK7vnxd+9Zk JOf+XYgLFSc/fB73VbXAl+oESyPbT492rAfGpDTChVlV4MJsZXkJW93AL3vAwxuFWdCy8HeL2S5w yFMW8kVpPaJKvWo7S2KlBTlJg7R2oOHfNCMSWqFMsVZKWSPGCLeBKVLaQBJFTSjJ3y1wAk0LzCht wBmf9j9KRvtPoujlA4noq48/DZbKfKa0aE0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMjJU MDU6NDE6MzMrMDA6MDAR36cUAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTIyVDA1OjQxOjMz KzAwOjAwYIIfqAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5C YII="
            />
          </div>
          <div class="line"></div>
          <div class="content_big">
            <div class="title">口座開設</div>
            <div class="word">書類等の審査後、当行にて口座開設を行います。</div>
          </div>
        </div>
        <!--title_big6-->
        <div class="box">
          <div class="img_big">
            <img
              class="bg_image"
              src="data:image/png;base64,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"
            />
          </div>
          <div class="content_big">
            <div class="title">カード等の郵送</div>
            <div class="word">
              口座開設完了後、通帳・キャッシュカード・インターネットバンキングご契約者カード等を郵送します。送付方法はそれぞれ異なり、別便での送付となります。詳しくは
              <a
                target="_blank"
                style="color: #000000; text-decoration: underline"
                href="javascript:void(0)"
                onclick="openURL('https://www.gunmabank.co.jp/kojin/apply/uketori.html','2')"
                >こちら<img
                  class="this"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAJCAYAAAAGuM1UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRTE2N0NBQjQ3NUYxMUU3OTg3MkU5NkFFRTMxNkUyMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRTE2N0NBQzQ3NUYxMUU3OTg3MkU5NkFFRTMxNkUyMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNFMTY3Q0E5NDc1RjExRTc5ODcyRTk2QUVFMzE2RTIxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNFMTY3Q0FBNDc1RjExRTc5ODcyRTk2QUVFMzE2RTIxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EHETrwAAAHVJREFUeNpiZEACO7Zu/c9AADAxkAhYgKY6QNknoLQ+ED/ColYOiC+yAIn9UAFFKP3Jw9v7A7pqoMECyE56CsR/iHISlLYBmvoEaAqIvQJI/8CilgNZAww4EmsDGABtOYDmbgUgdR8ozoiu4RJQ8h8xwQ4QYACAhSHZ3MvzzAAAAABJRU5ErkJggg==" /></a
              >。
              <br />カード等の発行を伴わないお申込みの場合は、メールでお手続きの完了をお知らせします。
              <br />※お受け取りを当行が確認するまでは、入金、振込、払い戻し等の取引の全部または一部を制限する場合があります。<br />
              <br />※一定期間が経過されても、カード等を受領なされない場合、開設した口座、サービスを含め、全てのお申込みを取消したものとさせていただく場合があります。
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-row style="height: 90px">
      <el-col :xs="24" :sm="24" class="flex_center">
        <van-button
          class="flex_center button_All position_R"
          type="primary"
          @click="toPage()"
        >
          <span>次へ</span>
          <span class="position_L">〉</span>
        </van-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  computed: {},
  created() {},
  mounted() {},
  components: {},
  methods: {},
};
</script>

<style scoped>
.img_big {
  width: 10%;
  max-width: 72px;
  display: table-cell;
  position: relative;
}

.bg_image {
  float: left;
  max-width: 72px;
  position: relative;
  display: table-cell;
  z-index: 2;
  width: 100%;
}

.content_big {
  font-size: 14px;
  margin-left: 20px;
  position: relative;
  top: -10px;
}

.title {
  color: #fc8b32;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
}

.line {
  width: 2px;
  height: 100%;
  background-color: #fc8b32;
  display: table-cell;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 5%;
  margin-left: -1px;
  border: 0px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

.word {
  color: #000;
  line-height: 20px;
  margin-top: 10px;
}

.box {
  display: table;
  width: 100%;
  position: relative;
}

.media {
  color: #fc8b32;
  font-weight: bold;
  font-size: 0.8em;
}

.this {
  width: 6px;
  height: 6px;
}

.Main_title {
  margin-left: 0px;
  font-size: 14px;
  /* margin-top: 20px; */
  line-height: 30px;
  color: #02a369;
  font-weight: bold;
}

.Main_title_1 {
  color: #02a369;
  font-weight: bold;
  font-size: 0.8em;
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
  margin-top: 30px;
  margin-bottom: 30px;
}
.top_waring {
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  font-size: 14px;
}

.height_100 {
  height: 100%;
}

.height_40 {
  height: 40px;
}

.msg_font {
  font-size: 12px;
}

.height_40px {
  height: 40px;
}

.padding_5px {
  padding: 5px;
}
.font_p {
  height: 25px;
}
@media screen and (max-width: 767px) {
  .padding_m_pc {
    padding-left: 25px;
  }
  .font_p_1 {
    margin-bottom: 25px;
  }

  .p_t_m {
    border-top: 1px solid #e6e6e6;
  }

  .redio_center {
    display: flex;
    justify-content: center;
  }

  .date_input_e {
    display: none;
  }

  .flex_center_mobile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .btn_w_ {
    width: 200px;
  }
  .font_p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}

@media screen and (min-width: 768px) {
  .mar_top_15 {
    margin-top: 15px;
  }
  .padding_m_pc {
    padding-right: 23px;
  }
  .font_p {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .btn_w_ {
    width: 200px;
  }

  .p_l_10 {
    padding-right: 10px;
  }

  .date_input_a {
    display: none;
  }

  .padding_checkbox {
    padding: 0px 0;
  }

  .position_ab {
    position: absolute;
  }

  .position_ {
    position: absolute;
    top: 0;
    left: 0;
  }

  .position_01 {
    left: 0;
    top: 60px;
  }

  .position_02 {
    left: 0;
    top: 50px;
  }

  .flex_center_mobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .border_r_01 {
    border-right: 1px solid #e6e6e6;
  }
}
</style>
