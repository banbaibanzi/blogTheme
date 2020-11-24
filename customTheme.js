$(function () {
  // 通过滚动条控制顶部导航的展开隐藏
  window.onscroll = debounce(showTop, 200);

  // ---------------function---------------------
  /**
   * 滚动条事件
   */
  function showTop() {
    // 滚动条初始距离
    var oldScrollNum = 0;
    // 获取滚动条实时距离
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    //下滑 顶部导航
    if (top > oldScrollNum) {
      if (top > 120) {
        $("#v_navbar").css("margin-top", "-60px");
      }
    } else {
      //上拉 顶部导航
      if (oldScrollNum - top < 20) {
        $("#v_navbar").css("margin-top", "0");
      }
    }
    oldScrollNum = top;
  }
  /**
   * 防抖
   * @param {*需要防抖的函数} fn
   * @param {*毫秒，防抖期限值} delay
   */
  function debounce(fn, delay) {
    let timer = null;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, delay);
    };
  }
  // ---------------function---------------------

  // 初始运行方法
  var setBlog = {
    init: function () {
      // 顶部box
      $("#header").wrap(`<div id="v_navbar"></div>`);
      // 加关注按钮
      $("#p_b_follow").prepend(
        `<a href="javascript:void(0)" onclick="follow('d07cf878-a0f8-470e-a663-08d753a8c051')">+加关注</a>`
      );
    },
    setBtn: function () {
      // 返回顶部
      $(document).on("click", ".up_show", function () {
        $("html,body").animate({ scrollTop: 0 }, 700);
      });
      // 控制目录显示
      $(document).on("click", ".catalogue_show", function () {
        $("#catalogue").toggleClass(function () {
          return $("#catalogue").hasClass("active")
            ? ($("#catalogue").removeClass("active"), "noactive")
            : ($("#catalogue").removeClass("noactive"), "active");
        });
      });
      // 控制功能区显示隐藏
      $(document).on("click", ".btns_show", function () {
        $(".up").toggleClass("up_show");
        $(".catalogue").toggleClass("catalogue_show");
        $(".skin").toggleClass("skin_show");
      });
      var $ele = $(`<div id="set_btn_box"></div>`),
        $a = $(`<div class="up up_show" title="返回顶部">
        <svg
          t="1605403323973" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg"p-id="3351" width="24" height="24">
          <path
            d="M960 717.8c0 9.2-3.6 18.5-10.8 25.7a36.576 36.576 0 0 1-51.9 0L512 358.1 126.7 743.4c-14.4 14.4-37.5 14.4-51.9 0s-14.4-37.5 0-51.9l411-411c14.4-14.4 37.5-14.4 51.9 0l411 411c7.7 7.8 11.3 17 11.3 26.3z"
            p-id="3352" fill="#97A1A7">
          </path>
        </svg>
      </div>`),
        $b = $(`<div class="catalogue catalogue_show" title="阅读目录">
        <svg
          t="1605405581349" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4545" width="24" height="24"
        >
          <path
            d="M106.666667 192a21.333333 21.333333 0 1 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 0-42.666667H106.666667z m0 298.666667a21.333333 21.333333 0 0 0 0 42.666666h85.333333a21.333333 21.333333 0 0 0 0-42.666666H106.666667z m0 298.666666a21.333333 21.333333 0 0 0 0 42.666667h85.333333a21.333333 21.333333 0 0 0 0-42.666667H106.666667zM320 192a21.333333 21.333333 0 0 0 0 42.666667h597.333333a21.333333 21.333333 0 0 0 0-42.666667H320z m0 298.666667a21.333333 21.333333 0 0 0 0 42.666666h597.333333a21.333333 21.333333 0 0 0 0-42.666666H320z m0 298.666666a21.333333 21.333333 0 0 0 0 42.666667h597.333333a21.333333 21.333333 0 0 0 0-42.666667H320z"
            fill="#97A1A7" p-id="4546"
          ></path>
        </svg>
      </div>`),
        $c = $(`<div class="skin skin_show" title="切换主题">
        <svg
          t="1605405878177" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="5754" width="24" height="24"
        >
          <path
            d="M772.8 96v64l163.2 161.6-91.2 91.2c-12.8-11.2-27.2-16-43.2-16-36.8 0-65.6 28.8-65.6 65.6V800c0 35.2-28.8 64-64 64H352c-35.2 0-64-28.8-64-64V462.4c0-36.8-28.8-65.6-65.6-65.6-16 0-32 6.4-43.2 16l-91.2-91.2L249.6 160h40l1.6 1.6C336 228.8 420.8 272 512 272c91.2 0 176-41.6 220.8-110.4 0-1.6 1.6-1.6 1.6-1.6h38.4V96M291.2 96H256c-22.4 0-38.4 6.4-49.6 19.2L43.2 276.8c-25.6 25.6-25.6 65.6 0 89.6l94.4 94.4c11.2 11.2 27.2 17.6 41.6 17.6s30.4-6.4 41.6-17.6h1.6c1.6 0 1.6 0 1.6 1.6V800c0 70.4 57.6 128 128 128h320c70.4 0 128-57.6 128-128V462.4c0-1.6 0-1.6 1.6-1.6h1.6c11.2 11.2 27.2 17.6 41.6 17.6 16 0 30.4-6.4 41.6-17.6l94.4-94.4c25.6-25.6 25.6-65.6 0-89.6L819.2 115.2c-12.8-12.8-28.8-19.2-46.4-19.2h-40c-22.4 0-41.6 11.2-54.4 30.4-33.6 49.6-96 81.6-168 81.6s-134.4-33.6-168-81.6C332.8 107.2 312 96 291.2 96z"
            fill="#97A1A7" p-id="5755"
          ></path>
        </svg>
      </div>`),
        $d = $(`<div class="set_btn btns_show">
        <svg
          t="1605402142735" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2254" width="32" height="32"
        >
          <path
            d="M221 592c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z"
            p-id="2255" fill="#97A1A7"
          ></path>
        </svg>
      </div>`);
      $($ele).append($a, $b, $c, $d);
      $("#home").append($ele);
    },
    showAvatar: function () {
      let _body = `.feedbackItem > .feedbackCon > .blog_comment_body`;
      if (_body.length) {
        let con = $(".feedbackItem > .feedbackCon");
        $(con).prepend(
          `<div class="avatar_wrap"><a target="_blank"">\n<img></img></a></div>`
        );
        $(con).each(function () {
          let avatarUrl = null,
            n = $(this).find('span[id$="avatar"]');
          n.length && (avatarUrl = $.trim($(n).text()));
          $(this)
            .find(".avatar_wrap img")
            .attr(
              "src",
              avatarUrl || "https://pic.cnblogs.com/face/sample_face.gif"
            );
          let url = $(this).parent().find(".comment_date").next().attr("href");
          $(this).find(".avatar_wrap a").attr("href", $.trim(url));
        });
      }
    },
    setMobile: function () {
      // 隐藏目录按钮
      $(".catalogue_show").css("display", "none");
      // nav导航栏
    },
    setContent: function () {
      let caption_1 = $("#cnblogs_post_body h2"),
        caption_2 = $("#cnblogs_post_body h3"),
        caption_3 = $("#cnblogs_post_body h4"),
        captions = $(
          "#cnblogs_post_body h2,#cnblogs_post_body h3,#cnblogs_post_body h4"
        ).clone();
      if (caption_1.length > 0) {
        let toc = $(
          '<div id="catalogue" class="active"><h3 style="text-align:center">阅读目录</h3></div>'
        );
        $("body").prepend(toc);
        let contents = $(`<ul></ul>`);
        toc.append(contents.append(captions));
        let idx = -1,
          idx2 = -1,
          idx3 = -1;
        captions.replaceWith(function () {
          let tagName = this.tagName.toLowerCase(),
            levels = ["h2", "h3", "h4"],
            l1 = levels[0],
            l2 = levels[1],
            l3 = levels[2];
          switch (tagName) {
            case l1:
              idx += 1;
              $(caption_1[idx]).append(`<a name="_caption${idx}">#</a>`);
              return `<li class="level1 lev${idx}"><a href="#_caption${idx}">${this.innerHTML}</a><ul></ul></li>`;
            case l2:
              idx2 += 1;
              $(caption_2[idx2]).append(
                `<a name="_caption${idx}_${idx2}">#</a>`
              );
              $(`.lev${idx} > ul`).append(
                `<li class="level2 lev${idx}_${idx2}"><a href="#_caption${idx}_${idx2}">${this.innerHTML}</a><ul></ul></li>`
              );
              return;
            case l3:
              idx3 += 1;
              $(caption_3[idx3]).append(
                `<a name="_caption${idx}_${idx2}_${idx3}">#</a>`
              );
              $(`.lev${idx}_${idx2} > ul`).append(
                `<li><a href="#_caption${idx}_${idx2}_${idx3}">${this.innerHTML}</a></li>`
              );
              return;
          }
        });
      }
    },
    isMobile: function () {
      let userAgentInfo = navigator.userAgent;
      let mobileAgents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
      ];
      //根据userAgent判断是否是手机
      for (let v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
          return true;
        }
      }
      let screen_width = window.screen.width;
      let screen_height = window.screen.height;
      //根据屏幕分辨率判断是否是手机
      if (screen_width < 500 && screen_height < 800) {
        return true;
      }
      return false;
    },
    runAll: function () {
      /* 运行所有方法
       * init() 初始化
       * setContent() 生成目录
       * setMobile() 移动端配置
       * setBtn() 右下角功能配置
       * showAvatar() 显示评论区头像
       * xxx() xxx
       * xxx() xxx
       * isMobile() 判断访问类型是PC端还是手机端
       */
      this.init();
      this.showAvatar();
      this.isMobile();
      if (this.isMobile()) {
        this.setMobile();
      } else {
        this.setContent();
        this.setBtn();
      }
    }
  };
  setBlog.runAll();
});

// 配置区域
$.extend({
  custom: function (val) {
    /**
     * signature 署名
     */
    let themeConfig = {
      version: "v1.1.0",
      signature: {
        enable: true,
        author: null,
        licenses: [
          "署名-非商业性使用-相同方式共享 4.0 国际",
          "https://creativecommons.org/licenses/by-nc-sa/4.0/"
        ],
        remark: null
      },
      // gitHubUrl: null
      gitHubUrl: "https://github.com/banbaibanzi/"
    };
    val && val.signature && Object.assign(themeConfig.signature, val.signature);
    val && val.gitHubUrl && (themeConfig.gitHubUrl = val.gitHubUrl);
    // signature 署名
    let signature = function () {
      let t = themeConfig.signature;
      if (t.enable) {
        // 获取当前页面
        let $a = $("#cb_post_title_url").attr("href"),
          $e = `<div class="signature_wrap">\n<p>作者：${
            t.author || $("#profile_block a").eq(0).html() || "佚名"
          }</p>\n<p>出处：<a href="${$a}">${$a}</a></p>\n<p>版权：本作品采用「<a href="${
            t.licenses[1]
          }" target="_blank">${t.licenses[0]}</a>」许可协议进行许可。</p>\n<p>${
            t.remark || ""
          }</p>\n</div>`;
        $("#MySignature").html($e).show();
      }
    };
    // github配置
    let setGithub = function () {
      let githubCorner = `<a class="github-corner" aria-label="View source on GitHub" target="_blank">\n
                            <svg width="60" height="60" viewBox="0 0 250 250" style="fill: var(--theme-color);color: #fff;position: fixed;
                                top: 0;border: 0; left: 0;transform: scale(-1, 1); aria-hidden="true">
                              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n
                              <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                fill="currentColor" style="transform-origin: 130px 106px" class="octo-arm">
                              </path>\n
                              <path
                                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                fill="currentColor" class="octo-body">
                              </path>\n
                            </svg>\n
                          </a>`;
      $("#v_navbar").prepend(githubCorner);
      $(".github-corner").attr("href", themeConfig.gitHubUrl);
    };
    // 运行的方法
    signature();
    themeConfig.gitHubUrl && setGithub();
  }
});
// 主题配置项
$.custom();

/**
 * 待优化项
 *  1.评论头像有时不显示
 *  2.推荐、反对按钮样式调整
 *  3.页面详情页样式待完善
 *  4.切换主题功能待做
 *  5.移动端、浏览器适配
 *  ...
 */
