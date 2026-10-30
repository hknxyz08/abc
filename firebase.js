// ============================================================
// Locket Remote Config Rewrite
// Bản Mod Tối Ưu, Siêu Nhẹ & Cá Nhân Hóa bởi: Hoàng Khánh Nam
// Original Logic: @duyvinh09
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
    obj.Attention = "Locket VIP - Tự host bởi Hoàng Khánh Nam";
    obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD & FEATURE GATES
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled",
            locket_views: "enabled", long_captions: "enabled", longer_video: "enabled",
            unlimited_friends: "enabled", priority_support: "enabled", profile_badge: "enabled",
            remove_ads: "enabled", video: "enabled", custom_widget_frames: "enabled", streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true, camera_roll: true, camera_theme: true,
            locket_views: true, remove_ads: true, custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight", onboarding: false, after_sent_moment: false,
            on_foreground: false, interval: 2592000, profile_banner: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true"
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & TẮT TRACKING
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off", history_ads_prefetch_count: "0", history_ads_dynamic_insertion: "false",
        sentry_sample_rate: "0", sentry_network_tracing: "false", sentry_performance_tracking: "false"
    });

    // ============================================================
    // 3. CAMERA, VIDEO & UPLOAD QUALITY
    // ============================================================
    Object.assign(obj.entries, {
        camera: JSON.stringify({ gold_max_duration: 60.0, max_duration: 60.0, ultra_wide: true, volume_button: true, flash_button: true, telephoto: true, quality_mbps: 0.6 }),
        camera_roll: JSON.stringify({ gold_max_duration: 60.0, video_max_duration: 60.0, camera_roll_max_duration: 60.0, quality_mbps: 0.6, flash_button: true }),
        upload_main: "false", upload_main_image_size: "1440"
    });

    // ============================================================
    // 4. BẠN BÈ & 5. WIDGET & 6. CACHE
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999999", friend_limit_mode: "0", soft_friend_limit_threshold_count: "999999999", signup_max_friends_count: "999999999",
        widget_badge_enabled: "true", live_activity_onboarding: "true", custom_profile_pics: "true",
        journal_settings: JSON.stringify({ debug_menu_enabled: false, compact_header: true, streak_visualization: true, streak_visualization_style: "gradient" }),
        cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
        cdn_domain_replacements_video: "true", image_fetch_cache: "true"
    });

    // ============================================================
    // 7. OVERLAY & CUSTOM CAPTIONS (CẤU TRÚC MỚI)
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location", "weather", "time", "streak", "star_sign", "quote", "breaking_news", "locket_count",
            "hello_kitty", "tuong_tuong", "tuat", "baby_love", "dang_ban_tuong_tu", "cho_anh_chut_thoi", "em_nho_anhh", "minh_la_lop", "nao_bao_tri", "du_an_ma", "cinema_time", "an_com_chua", "ngu_ngon", "2am_thoughts", "me_anh_me_ngu",
            "locket_cuti", "locket_xinh", "locket_dep", "locket_dangiu", "gai_dep", "trai_dep", "be_ngoan", "tuyen_duong",
            "halloween_2026", "autumn_2026", "christmas_eve_2026", "christmas_day_2026", "new_years_eve_2026", "new_years_day_2027", "new_years_day_2027_alternate", "no_memory"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "🎨 General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:link", source: "local", caption: { type: "link" } },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:quote", source: "local", caption: { type: "quote" } },
                    { overlay_id: "caption:breaking_news", source: "local", caption: { type: "breaking_news" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
                ]
            },
            {
                section: "🎨 Khanh Nam",
                items: [
                    { overlay_id: "caption:hello_kitty", source: "remote", caption: { background: { colors: ["#FFD1DC", "#FFB7C5", "#FFC0CB"] }, icon: { data: "🌸", type: "emoji" }, max_lines: 1, text: "Nhớ hkn không?", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:tuong_tuong", source: "remote", caption: { background: { colors: ["#3977D5", "#78A9F5", "#D0E4FF"] }, icon: { data: "🤡", type: "emoji" }, max_lines: 1, text: "Oắt đờ fắc??", text_color: "#173767", type: "static_content" } },
                    { overlay_id: "caption:tuat", source: "remote", caption: { background: { colors: ["#2C1A0E", "#5D4037", "#D7A86E"] }, icon: { data: "🐕", type: "emoji" }, max_lines: 1, text: "Tuất", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:baby_love", source: "remote", caption: { background: { colors: ["#FFB6C1", "#FF69B4", "#FF1493"] }, icon: { data: "🧸", type: "emoji" }, max_lines: 1, text: "Bị đẹp chaii 😎", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:dang_ban_tuong_tu", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💭", type: "emoji" }, max_lines: 1, text: "Đang bận tương tư", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:cho_anh_chut_thoi", source: "remote", caption: { background: { colors: ["#F4A6B7", "#F6BFA6", "#F8D9A0"] }, icon: { data: "heart.fill", type: "sf_symbol", color: "#E85D75" }, max_lines: 1, text: "Chờ anh chút thôi", text_color: "#593744", type: "static_content" } },
                    
                    { overlay_id: "caption:minh_la_lop", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "🛞", type: "emoji" }, max_lines: 1, text: "Mình là lốp", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:nao_bao_tri", source: "remote", caption: { background: { colors: ["#B8E0D2", "#D8EAD8", "#C9D9F0"] }, icon: { data: "🧠", type: "emoji" }, max_lines: 1, text: "Đau hết cả đầu @@", text_color: "#35564F", type: "static_content" } },
                    { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "👻", type: "emoji" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:cinema_time", source: "remote", caption: { background: { colors: ["#1A237E", "#455A64"] }, icon: { data: "🎬", type: "emoji" }, max_lines: 1, text: "Cinema Time!", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:an_com_chua", source: "remote", caption: { background: { colors: ["#FF9800", "#F57C00"] }, icon: { data: "🍽️", type: "emoji" }, max_lines: 1, text: "Ăn cơm chưa?", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:ngu_ngon", source: "remote", caption: { background: { colors: ["#3F51B5", "#1A237E"] }, icon: { type: "sf_symbol", data: "moon.zzz.fill", color: "#FFFFFFE6" }, max_lines: 1, text: "Ngủ ngon", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:2am_thoughts", source: "remote", daily_start_hour: 1, daily_end_hour: 3, caption: { background: { colors: ["#0F2027", "#203A43", "#2C5364"] }, icon: { type: "sf_symbol", data: "cloud.bolt.fill", color: "#FFFFFFE6" }, max_lines: 1, text: "2:00 AM Thoughts 🌙", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:me_anh_me_ngu", source: "remote", caption: { background: { colors: ["#C4C8EF", "#DED3F4", "#EBCDE4"] }, icon: { data: "💤", type: "emoji" }, max_lines: 1, text: " Lại thấy nhớ cậu rồi!", text_color: "#4F4770", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Chứng nhận của Locket",
                items: [
                    { overlay_id: "caption:locket_cuti", source: "remote", caption: { background: { colors: ["#35B5E8", "#19A1D8"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Locket xác nhận bạn cutii", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:locket_xinh", source: "remote", caption: { background: { colors: ["#FFD45C", "#F5B91E"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Locket xác nhận bạn xjnh gái", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:locket_dep", source: "remote", caption: { background: { colors: ["#258DEB", "#1672D4"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Locket xác nhận bạn đẹp chai", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:locket_dangiu", source: "remote", caption: { background: { colors: ["#FF638B", "#F44772"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Locket xác nhận bạn dangiu", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:gai_dep", source: "remote", caption: { background: { colors: ["#FF91AE", "#F8759B"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Đã xác minh bạn là gái đẹp", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:trai_dep", source: "remote", caption: { background: { colors: ["#4A9FEF", "#267DD7"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Đã xác minh bạn là trai đẹp", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:be_ngoan", source: "remote", caption: { background: { colors: ["#E9B9C5", "#D9A4B3"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Đã xác nhận bạn là bé ngoan", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:tuyen_duong", source: "remote", caption: { background: { colors: ["#D94A77", "#B82D59"] }, icon: { data: "checkmark.seal.fill", type: "sf_symbol" }, max_lines: 1, text: "Locket tuyên dương bạn cute", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Holiday Caption",
                items: [
                    { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, icon: { type: "image", data: "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/halloween_indicator%403x.png", source: "url" }, max_lines: 1, text: "Halloween", localized_text: { en: "Halloween", vn: "Halloween" }, text_color: "#FFB182", type: "static_content" } },
                    { overlay_id: "caption:autumn_2026", source: "remote", caption: { background: { colors: ["#FFE0A0", "#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", localized_text: { en: "Xin chào Mùa Thu", vn: "Xin chào Mùa Thu" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:christmas_eve_2026", source: "remote", caption: { background: { colors: ["#2FA85F", "#176B3A"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:christmas_day_2026", source: "remote", caption: { background: { colors: ["#E53935", "#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:new_years_eve_2026", source: "remote", caption: { background: { colors: ["#FFC64B", "#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#643F00", type: "static_content" } },
                    { overlay_id: "caption:new_years_day_2027", source: "remote", caption: { background: { colors: ["#3B00EC", "#823FFF"] }, icon: { data: "💫", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:new_years_day_2027_alternate", source: "remote", caption: { background: { colors: ["#FF0062", "#FF783F"] }, max_lines: 1, text: "2027", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:no_memory", source: "remote", caption: { background: { image: { type: "image", data: "https://public.locketcamera.com/locket-public/overlays/forgotten_island/forgotten_island_bg.png", source: "url" }, colors: ["#1A1A2E", "#16213E"] }, max_lines: 1, text: "NO MEMORY LEFT BEHIND", text_color: "#FFFFFFE6", type: "static_content" } }
                ]
            }
        ])
    });
}

$done({ body: JSON.stringify(obj) });
