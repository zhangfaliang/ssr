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
