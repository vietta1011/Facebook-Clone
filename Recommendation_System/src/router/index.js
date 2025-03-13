import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// import VueRouter để cho vue sử dụng các route giúp chuyển hướng trang

// khai báo các route
let router = new VueRouter({
  mode: "history", // dùng history API (chưa rõ lắm nma nó là thay thế cho # của URL(không quan trọng lắm))
  routes: [
    {
      path: "/login", // vào trang login
      name: "GettingStarted", // tên của đường dẫn (hoặc tên của component)
      component: () => import("@/views/GettingStarted/GettingStarted.vue"), // chuyển hướng vào component
      meta: {
        guest: true, // để chỉ cho người dùng chưa đăng nhập vào hiện đang là khách
      },
    },
    {
      path: "/change-password/:id", // vào trang đổi mật khẩu với id tài khoản được lấy từ cơ sở dữ liệu
      name: "ChangePassword",
      component: () => import("@/views/GettingStarted/ChangePassword.vue"),
    },
    {
      path: "/", // chuyển hướng vào trang chính
      component: () => import("@/views/Overview/Overview.vue"),
      meta: {
        requiresAuth: true, // đã có xác thức tài khoản đăng nhập vào
      },
      children: [
        {
          path: "", // mặc định trang chính này là trang newsfeed khi đăng nhập vào
          name: "NewsFeed",
          component: () => import("@/views/NewsFeed/NewsFeed.vue"),
        },
      ],
    },
    {
      path: "/personal", // chuyển hướng vào trang cá nhân (bao gồm nhiều trang con)
      name: "Personal",
      redirect: "/personal/:id", // chuyển hướng vào trang cá nhân của người đang sử dụng (kiểm tra id sau khi đăng nhập), là vào cái child con đầu tiên bên dưới
      component: () => import("@/views/Personal/PersonalPage.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/personal/:id", // chuyển hướng vào dòng thời gian trong trang cá nhân (các bài đã đăng)
          name: "Personal.TabTimelinePersonal",
          component: () =>
            import("@/views/Personal/ListTabView/TabTimeline.vue"),
        },
        {
          path: "/personal/:id/about", // chuyển hướng vào thông tin cá nhân người dùng
          name: "Personal.TabAboutPersonal",
          component: () => import("@/views/Personal/ListTabView/TabAbout.vue"),
        },
        {
          path: "/personal/:id/library", // chuyển hướng vào thư viện ảnh
          name: "Personal.TabLibraryPersonal",
          component: () =>
            import("@/views/Personal/ListTabView/TabLibrary.vue"),
        },
        {
          path: "/personal/:id/friends", // chuyển hướng vào list bạn bè
          redirect: "/personal/:id/friends/all", // tất cả bạn bè của mình
          name: "Personal.TabFriendPersonal",
          component: () => import("@/views/Personal/ListTabView/TabFriend.vue"),
          children: [
            {
              path: "/personal/:id/friends/all", // tất cả bạn bè của mình
              name: "TabAllFriend",
              component: () =>
                import(
                  "@/views/Personal/ListTabView/SubTabFriend/TabAllFriend.vue"
                ),
            },
          ],
        },
      ],
    },
    {
      path: "/group", // chuyển hướng vào trang nhóm
      name: "OverviewGroup",
      component: () => import("@/views/Group/OverviewGroup.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/group/create", // chuyển hướng vào trang tạo nhóm
      name: "AddGroup",
      component: () => import("@/views/Group/AddGroup.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/group/:id", // xem 1 nhóm nào đó (id lấy từ cơ sở dữ liệu khi bấm vào nhóm tương ứng)
      redirect: "/group/:id/about", // xem thông tin của nhóm
      name: "GroupDetail",
      component: () => import("@/views/Group/GroupDetail.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/group/:id", // xem 1 nhóm nào đó
          name: "GroupDetail.TabDiscussionGroup",
          component: () =>
            import("@/views/Group/ListTabView/TabDiscussion.vue"),
        },
        {
          path: "/group/:id/about", // xem thông tin nhóm
          name: "GroupDetail.TabGeneralGroup",
          component: () => import("@/views/Group/ListTabView/TabGeneral.vue"),
        },
        {
          path: "/group/:id/member", // xem thành viên trong nhóm
          name: "GroupDetail.TabMemberGroup",
          component: () => import("@/views/Group/ListTabView/TabMember.vue"),
        },
      ],
    },
    {
      path: "/post/:id", // xem 1 bài post nào đó khi bấm vào
      name: "DetailPost",
      component: () => import("@/views/DetailPost/DetailPost.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/chat", // chuyển hướng vào box chat nào đó
      name: "ChatMonitor",
      component: () => import("@/views/Chat/ChatMonitor.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/video-call", // chuyển hướng vào trang video call
      name: "VideoCall",
      component: () => import("@/views/VideoCall/VideoCall.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/setting", // chuyển hướng vào trang cài đặt
      name: "Setting",
      component: () => import("@/views/Setting/ChangePassword.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// Meta Handling
// đây là 1 middleware (bộ xử lý trung gian xử lý xác thực đã đăng nhập chưa)
router.beforeEach((to, from, next) => {
  // Check router bắt buộc phải có Authen
  let token = Vue.cookie.get("jwtToken"); // lấy Jwt Token từ cookie
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token == null) {
      next({
        path: "/login", // nếu chưa có token thì mặc định chuyển vào trang login
        params: { nextUrl: to.fullPath },
      });
    } else {
      next(); // nếu có rồi thì tiếp tục thực hiện các hành động
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    // nếu có token nhưng trong route có gán guest là true thì sẽ chuyển về trang chính
    if (token == null) {
      next();
    } else {
      next({ name: "Overview" });
    }
  } else {
    next();
  }
});

export default router;
// file này chủ yếu để viết các đường dẫn url để cho trang web chuyển hướng sang các component cần thiết
