// note that "thunderbolt" and "1380b703-ce81-ff05-f115-39571d94dfcd" don't appear here because they're already sampled at Thunderbolt's level
// To see list the full list https://docs.google.com/spreadsheets/d/1JeksizOs19ODisIAz7HxqGv9oqBKr__570wjqzTK_XU/edit#gid=1853852140
export const VERTICALS_LIST = {
  "1380b703-ce81-ff05-f115-39571d94dfcd_1380bbc4-1485-9d44-4616-92e36b1ead6b": [
    21, 23,
  ],
  "1380b703-ce81-ff05-f115-39571d94dfcd_1380bbc4-1485-9d44-4616-92e36b1ead6b_ssr":
    [21, 23],
  "14271d6f-ba62-d045-549b-ab972ae1f70e": [22, 28],
  "14271d6f-ba62-d045-549b-ab972ae1f70e_142bb34d-3439-576a-7118-683e690a1e0d": [
    21, 23,
  ],
  "14271d6f-ba62-d045-549b-ab972ae1f70e_142bb34d-3439-576a-7118-683e690a1e0d_ssr":
    [21, 23],
  "14517e1a-3ff0-af98-408e-2bd6953c36a2": [22, 28],
  "1484cb44-49cd-5b39-9681-75188ab429de": [22, 28],
  "14bcded7-0066-7c35-14d7-466cb3f09103": [22, 28],
  "14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9": [22, 28],
  "14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9_members": [21],
  "14cc59bc-f0b7-15b8-e1c7-89ce41d0e0c9_members_ssr": [21],
  "14ce1214-b278-a7e4-1373-00cebd1bef7c": [22, 28],
  "14ce1214-b278-a7e4-1373-00cebd1bef7c_getSubscribers": [21, 23],
  "14ce1214-b278-a7e4-1373-00cebd1bef7c_getSubscribers_ssr": [21, 23],
  "14ce1214-b278-a7e4-1373-00cebd1bef7c_init-phase": [21, 23],
  "14ce1214-b278-a7e4-1373-00cebd1bef7c_init-phase_ssr": [21, 23],
  "14ce1214-b278-a7e4-1373-00cebd1bef7c_wixForms": [21, 23],
  "14ce1214-b278-a7e4-1373-00cebd1bef7c_wixForms_ssr": [21, 23],
  "675bbcef-18d8-41f5-800e-131ec9e08762": [22, 28],
  dataBinding: [22, 28],
  "1484cb44-49cd-5b39-9681-75188ab429de_SearchAppController": [21],
  "1484cb44-49cd-5b39-9681-75188ab429de_SearchAppController_ssr": [21],
};

// this is a temporary white list. viewer performance team are using 'script_loaded' event to know which applications are loaded on a specific session
// there's a migration plan for BI event 72:520, ETA end of June
// https://wix.slack.com/archives/C03SGRL03RD/p1685262602770329?thread_ts=1685099118.588219&cid=C03SGRL03RD
export const PHASES_WHITE_LIST = {
  script_loaded: [22, 28],
  await_controller_promise: [22, 28],
};

export const SAMPLED_APP_NAMES = Object.keys(VERTICALS_LIST);
export const NON_SAMPLED_PHASES = Object.keys(PHASES_WHITE_LIST);
