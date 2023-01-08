import { IniSettings } from "./store";

interface IniResponse {
  ypbpr: number;
  composite_sync: number;
  forced_scandoubler: number;
  vga_scaler: number;
  vga_sog: number;
  keyrah_mode: string;
  reset_combo: number;
  key_menu_as_rgui: number;
  video_mode: string;
  video_mode_pal: string;
  video_mode_ntsc: string;
  video_info: number;
  vsync_adjust: number;
  hdmi_audio_96k: number;
  dvi_mode: number;
  hdmi_limited: number;
  kbd_nomouse: number;
  mouse_throttle: number;
  bootscreen: number;
  vscale_mode: number;
  vscale_border: number;
  rbf_hide_datecode: number;
  menu_pal: number;
  bootcore: string;
  bootcore_timeout: number;
  font: string;
  fb_size: number;
  fb_terminal: number;
  osd_timeout: number;
  direct_video: number;
  osd_rotate: number;
  gamepad_defaults: number;
  recents: number;
  controller_info: number;
  refresh_min: number;
  refresh_max: number;
  jamma_vid: string;
  jamma_pid: string;
  sniper_mode: number;
  browse_expand: number;
  logo: number;
  shared_folder: string;
  no_merge_vid: string;
  no_merge_pid: string;
  no_merge_vidpid: string[];
  custom_aspect_ratio_1: string;
  custom_aspect_ratio_2: string;
  spinner_vid: string;
  spinner_pid: string;
  spinner_axis: number;
  spinner_throttle: number;
  afilter_default: string;
  vfilter_default: string;
  vfilter_vertical_default: string;
  vfilter_scanlines_default: string;
  shmask_default: string;
  shmask_mode_default: number;
  log_file_entry: number;
  bt_auto_disconnect: number;
  bt_reset_before_pair: number;
  waitmount: string;
  rumble: number;
  wheel_force: number;
  wheel_range: number;
  hdmi_game_mode: number;
  vrr_mode: number;
  vrr_min_framerate: number;
  vrr_max_framerate: number;
  vrr_vesa_framerate: number;
  video_off: number;
  player_1_controller: string;
  player_2_controller: string;
  player_3_controller: string;
  player_4_controller: string;
  disable_autofire: number;
  video_brightness: number;
  video_contrast: number;
  video_saturation: number;
  video_hue: number;
  video_gain_offset: string;
  hdr: number;
}

export function newIniResponse(store: IniSettings): IniResponse {
  // TODO: check what other values should be reversed
  return {
    ypbpr: store.ypbpr,
    composite_sync: store.compositeSync,
    forced_scandoubler: store.forcedScandoubler,
    vga_scaler: store.vgaScaler,
    vga_sog: store.vgaSog,
    keyrah_mode: store.keyrahMode,
    reset_combo: store.resetCombo,
    key_menu_as_rgui: store.keyMenuAsRgui,
    video_mode: store.videoMode,
    video_mode_pal: store.videoModePal,
    video_mode_ntsc: store.videoModeNtsc,
    video_info: store.videoInfo,
    vsync_adjust: store.vsyncAdjust,
    hdmi_audio_96k: store.hdmiAudio96k,
    dvi_mode: store.dviMode,
    hdmi_limited: store.hdmiLimited,
    kbd_nomouse: store.keyboardNoMouse,
    mouse_throttle: store.mouseThrottle,
    bootscreen: store.bootScreen,
    vscale_mode: store.verticalScaleMode,
    vscale_border: store.vscaleBorder,
    rbf_hide_datecode: store.rbfHideDatecode,
    menu_pal: store.menuPal,
    bootcore: store.bootCore,
    bootcore_timeout: store.bootCoreTimeout,
    font: store.font,
    fb_size: store.fbSize,
    fb_terminal: store.fbTerminal,
    osd_timeout: store.osdTimeout,
    direct_video: store.directVideo,
    osd_rotate: store.osdRotate,
    gamepad_defaults: store.gamepadDefaults,
    recents: store.recents,
    controller_info: store.controllerInfo,
    refresh_min: store.refreshMin,
    refresh_max: store.refreshMax,
    jamma_vid: store.jammaVid,
    jamma_pid: store.jammaPid,
    sniper_mode: store.sniperMode,
    browse_expand: store.browseExpand,
    logo: store.logo,
    shared_folder: store.sharedFolder,
    no_merge_vid: store.noMergeVid,
    no_merge_pid: store.noMergePid,
    no_merge_vidpid: store.noMergeVidPid,
    custom_aspect_ratio_1: store.customAspectRatio1,
    custom_aspect_ratio_2: store.customAspectRatio2,
    spinner_vid: store.spinnerVid,
    spinner_pid: store.spinnerPid,
    spinner_axis: store.spinnerAxis,
    spinner_throttle: store.spinnerThrottle,
    afilter_default: store.aFilterDefault,
    vfilter_default: store.vfilterDefault,
    vfilter_vertical_default: store.vfilterVerticalDefault,
    vfilter_scanlines_default: store.vfilterScanlinesDefault,
    shmask_default: store.shmaskDefault,
    shmask_mode_default: store.shmaskModeDefault,
    log_file_entry: store.logFileEntry,
    bt_auto_disconnect: store.btAutoDisconnect,
    bt_reset_before_pair: store.btResetBeforePair,
    waitmount: store.waitMount,
    rumble: store.rumble,
    wheel_force: store.wheelForce,
    wheel_range: store.wheelRange,
    hdmi_game_mode: store.hdmiGameMode,
    vrr_mode: store.vrrMode,
    vrr_min_framerate: store.vrrMinFramerate,
    vrr_max_framerate: store.vrrMaxFramerate,
    vrr_vesa_framerate: store.vrrVesaFramerate,
    video_off: store.videoOff,
    player_1_controller: store.player1Controller,
    player_2_controller: store.player2Controller,
    player_3_controller: store.player3Controller,
    player_4_controller: store.player4Controller,
    disable_autofire: store.disableAutoFire,
    video_brightness: store.videoBrightness,
    video_contrast: store.videoContrast,
    video_saturation: store.videoSaturation,
    video_hue: store.videoHue,
    video_gain_offset: store.videoGainOffset,
    hdr: store.hdr,
  };
}