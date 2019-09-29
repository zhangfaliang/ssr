import { createSelector } from "reselect";
import { get } from "lodash";

export const selectState = () => state => get(state, "global", {});

export const makeListViewScrollTop = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "scrollTop");
  }
);
export const makeListFeedbackModal = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "feedbackModal", {});
  }
);

export const makeCeilingFlag = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "ceilingFlag");
  }
);

export const makePathName = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "pathname");
  }
);

export const makeTabs = createSelector(
  selectState(),
  globalData => {
    return [
      {
        badgeText: "3",
        title: "直播",
        toTarget: { pathname: "/index", query: { type: 1 } }
      },
      {
        badgeText: "今日(20)",
        title: "推荐",
        toTarget: { pathname: "/type_list", query: { type: 3 } }
      },

      {
        dot: true,
        title: "热门",
        toTarget: { pathname: "/index", query: { type: 1 } }
      },
      {
        badgeText: "3",
        title: "最新",
        toTarget: { pathname: "/index", query: { type: 1 } }
      },
      {
        badgeText: "今日(20",
        title: "动漫",
        toTarget: { pathname: "/index", query: { type: 1 } }
      },
      {
        dot: true,
        title: "影视",
        toTarget: { pathname: "/index", query: { type: 1 } }
      }
    ];
  }
);

export const makeUserInfo = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "userInfo");
  }
);
export const makeIsLogin = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "userInfo.isLogin", false);
  }
);

export const makeUserSildFalg = createSelector(
  selectState(),
  globalData => {
    return get(globalData, "userSildFalg", false);
  }
);

export const makeIndexConfig = createSelector(
  selectState(),
  globalData => {
    const userSlidBtn = get(
      globalData,
      "pageIndexConfig.userSlidBtn",
      []
    ).filter(item => item.isShow);
    const userSetBtn = get(globalData, "pageIndexConfig.userSetBtn", []).filter(
      item => item.isShow
    );
    const goToPageBtn = get(
      globalData,
      "pageIndexConfig.goToPageBtn",
      []
    ).filter(item => item.isShow);
    return get(globalData, "pageIndexConfig", {
      userSlidBtn,
      userSetBtn,
      goToPageBtn
    });
  }
);
