// ============================================================
// LOCKET VIP & CAPTIONS - TỐI ƯU HÓA BỞI HOÀNG KHÁNH NAM
// Dành riêng cho kho: hknxyz08/abc
// Cleaned: Gỡ Popup, gỡ Viền rác, tối ưu tốc độ load
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
    obj.Attention = "Bản Mod VIP tự host độc quyền bởi Hoàng Khánh Nam";
    obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD & TÍNH NĂNG VIP (Đã gỡ Popup giới thiệu)
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
    // 2. CHẶN QUẢNG CÁO & THEO DÕI NGẦM (Tăng tốc app)
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false"
    });

    // ============================================================
    // 3. CAMERA CHẤT LƯỢNG CAO & BỘ LỌC
    // ============================================================
    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: 60.0, max_duration: 60.0,
            ultra_wide: true, volume_button: true, flash_button: true, telephoto: true,
            quality_mbps: 0.8
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 30.0, video_max_duration: 30.0, max_duration: 30.0,
            quality_mbps: 0.8, flash_button: true
        }),
        live_photos: JSON.stringify({ capture: true, video: true, viewing: true, catch_up: true }),
        camera_filter_config: JSON.stringify({
            allows_custom_filters: true, show_filter_button: true, sheet_enabled: true, open_sheet_immediately: true,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] }
            ],
            picker_filters: ["okay_wig", "influencer", "looks_maxxing", "cutesy", "sticker_face", "flower_crown"]
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        video_sound_enabled: "true",
        zoom_enabled: "true"
    });

    // ============================================================
    // 4. MỞ KHÓA BẠN BÈ KHÔNG GIỚI HẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999999",
        friend_limit_mode: "0",
        show_friend_limit_on_cam: "false",
        celebrity_inbox_enabled: "true",
        friends_sheet_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "🌟🫶🌟" } ]}),
        hide_friends_enabled: "true",
        show_all_contacts: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK & CHAT
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0; streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        conversations_enabled: "true",
        groups_enabled: "true"
    });

    // ============================================================
    // 6. GIAO DIỆN & TỐI ƯU HÓA (Đã gỡ Viền Widget rác)
    // ============================================================
    Object.assign(obj.entries, {
        widget_badge_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false, focus_animation: false, compact_header: true,
            friends_button: false, reverse_scroll_direction: false, streak_visualization: true,
            streak_visualization_style: "gradient", streak_header_minimum_count: 0, streak_visualization_minimum_count: 2,
            overlay_indicators: { location: false, music: true, static_content: true, weather: true }
        }),
        custom_profile_pics: "true"
    });

    // ============================================================
    // 7. CAPTION NHÃN DÁN ĐỘC QUYỀN
    // ============================================================
    Object.assign(obj.entries, {
        captions_enabled: "true",
        music_caption_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "locket_count", "custom"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "🎨 Tình yêu & Cơm chó 💕",
                items: [
                    { overlay_id: "caption:em_nho_anhh", source: "remote", caption: { background: { colors: ["#FF6B81", "#FF8E9E", "#FFB3C6"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "em nhớ anhh", text_color: "#8C1938", type: "static_content" } },
                    { overlay_id: "caption:nho_anh_phien", source: "remote", caption: { background: { colors: ["#F0B5CB", "#F6D0DF", "#DCCAF0"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "nhớ anh tới mức hơi phiền", text_color: "#70445A", type: "static_content" } },
                    { overlay_id: "caption:i_love_you", source: "remote", caption: { background: { colors: ["#FF8FAB", "#FFC2D1", "#FFE5EC"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "i love you", text_color: "#8A304F", type: "static_content" } },
                    { overlay_id: "caption:yeu_cuc_dang", source: "remote", caption: { background: { colors: ["#F2B5C8", "#F8D5D9", "#F6E5D2"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "yêu cục dàng", text_color: "#754454", type: "static_content" } },
                    { overlay_id: "caption:yeu_emmm", source: "remote", caption: { background: { colors: ["#F2AFC6", "#F7C9D9", "#E5CFF4"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "Yeu Emmm", text_color: "#70445C", type: "static_content" } },
                    { overlay_id: "caption:yeu_anhhh", source: "remote", caption: { background: { colors: ["#B8C9F2", "#D5DDF8", "#E8CFF0"] }, icon: { data: "🫶", type: "emoji" }, max_lines: 1, text: "Yeu Anhhh", text_color: "#414C72", type: "static_content" } },
                    { overlay_id: "caption:baby_love", source: "remote", caption: { background: { colors: ["#FFB6C1", "#FF69B4", "#FF1493"] }, icon: { data: "🧸", type: "emoji" }, max_lines: 1, text: "Baby Love 💖", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:muon_duoc_om", source: "remote", caption: { background: { colors: ["#FF9A9E", "#FECFEF"] }, icon: { data: "🫂", type: "emoji" }, max_lines: 1, text: "Muốn được ôm", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:cho_hun_mieng", source: "remote", caption: { background: { colors: ["#F3AFC7", "#F8D0D8", "#F4C9BB"] }, icon: { data: "😘", type: "emoji" }, max_lines: 1, text: "cho hun miếng coi", text_color: "#754252", type: "static_content" } },
                    { overlay_id: "caption:me_anh_me_ngu", source: "remote", caption: { background: { colors: ["#C4C8EF", "#DED3F4", "#EBCDE4"] }, icon: { data: "💤", type: "emoji" }, max_lines: 1, text: "mê anh hơn mê ngủ", text_color: "#4F4770", type: "static_content" } },
                    
                    // ĐÃ SỬA DÒNG NÀY THEO YÊU CẦU:
                    { overlay_id: "caption:be_mi_cute", source: "remote", caption: { background: { colors: ["#FF8FAB", "#FFC2D1", "#FFE5EC"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Bé Mĩ cute", text_color: "#812D4A", type: "static_content" } },
                    
                    { overlay_id: "caption:iu_thi_noi", source: "remote", caption: { background: { colors: ["#FFD166", "#FFE8A3", "#FFF3D0"] }, icon: { data: "🤭", type: "emoji" }, max_lines: 1, text: "iu thì nói, đừng có ngại", text_color: "#704510", type: "static_content" } },
                    { overlay_id: "caption:iu_hong_thi_bao", source: "remote", caption: { background: { colors: ["#FF6B6B", "#FF9999", "#FFD1C9"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "iu hong thì bảo", text_color: "#812626", type: "static_content" } },
                    { overlay_id: "caption:anh_thuong_em", source: "remote", caption: { background: { colors: ["#A0C4FF", "#BDE0FE", "#DFF3FF"] }, icon: { data: "🥹", type: "emoji" }, max_lines: 1, text: "anh có thương em thiệt hong", text_color: "#23466F", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Gen Z & Xéo xắt 💅",
                items: [
                    { overlay_id: "caption:feeling_cute", source: "remote", caption: { background: { colors: ["#F8BBD0", "#E91E63"] }, icon: { data: "🌷", type: "emoji" }, max_lines: 1, text: "Feeling Cute", text_color: "#FFFFFFE5", type: "static_content" } },
                    { overlay_id: "caption:cutie_pie", source: "remote", caption: { background: { colors: ["#FFDEE9", "#FFB6C1", "#FF9AA2"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "Cutie Pie 🌸", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:ngoan_xinh_iu", source: "remote", caption: { background: { colors: ["#F3C1D4", "#F8DDE5", "#E8CFF0"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "ngoan xinh iu của ai đây", text_color: "#71465D", type: "static_content" } },
                    { overlay_id: "caption:hom_nay_slay", source: "remote", caption: { background: { colors: ["#C5B5E8", "#DDD0F2", "#F0C9DD"] }, icon: { type: "sf_symbol", data: "sparkles", color: "#514368" }, max_lines: 1, text: "hôm nay cũng slay", text_color: "#514368", type: "static_content" } },
                    { overlay_id: "caption:xinh_la_tai_nang", source: "remote", caption: { background: { colors: ["#F0B5CA", "#F5D2DD", "#EAD1F0"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "xinh là một loại tài năng", text_color: "#70435B", type: "static_content" } },
                    { overlay_id: "caption:dep_khong_ly_do", source: "remote", caption: { background: { colors: ["#E5B7CD", "#F0D0DC", "#DCCCF0"] }, icon: { data: "🪞", type: "emoji" }, max_lines: 1, text: "đẹp không cần lý do", text_color: "#67455C", type: "static_content" } },
                    { overlay_id: "caption:main_character", source: "remote", caption: { background: { colors: ["#D6B8E8", "#E8CDEB", "#F3D2D9"] }, icon: { type: "sf_symbol", data: "movieclapper.fill", color: "#5A4366" }, max_lines: 1, text: "main character của cuộc đời mình", text_color: "#5A4366", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Meme & Bất ổn 🫠",
                items: [
                    { overlay_id: "caption:check_var", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "📺", type: "emoji" }, max_lines: 1, text: "Check VAR liền", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:so_ho_la_bao", source: "remote", caption: { background: { colors: ["#F5B8A9", "#F6D0B2", "#E8BFCB"] }, icon: { data: "🚨", type: "emoji" }, max_lines: 1, text: "sơ hở là báo", text_color: "#713F40", type: "static_content" } },
                    { overlay_id: "caption:chay_ngay_di", source: "remote", caption: { background: { colors: ["#D31027", "#EA384D"] }, icon: { data: "🏃💨", type: "emoji" }, max_lines: 1, text: "Chạy ngay đi", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:bat_on_that_su", source: "remote", caption: { background: { colors: ["#636363", "#A2AB58"] }, icon: { data: "🫠", type: "emoji" }, max_lines: 1, text: "Bất ổn thật sự", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:toi_cong_chuyen", source: "remote", caption: { background: { colors: ["#F2B5A7", "#F6D1B5", "#E9C2D5"] }, icon: { data: "💀", type: "emoji" }, max_lines: 1, text: "tới công chuyện nữa rồi", text_color: "#634044", type: "static_content" } },
                    { overlay_id: "caption:xiu_ngang", source: "remote", caption: { background: { colors: ["#C0B7E5", "#D8D0F0", "#EACDE2"] }, icon: { data: "💀", type: "emoji" }, max_lines: 1, text: "xĩu ngang xĩu dọc", text_color: "#504567", type: "static_content" } },
                    { overlay_id: "caption:overthinking", source: "remote", caption: { background: { colors: ["#2C3E50", "#4CA1AF"] }, icon: { data: "🤯", type: "emoji" }, max_lines: 1, text: "Overthinking vai chưởng", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:rot_nuoc_mat", source: "remote", caption: { background: { colors: ["#1CB5E0", "#000046"] }, icon: { data: "😭", type: "emoji" }, max_lines: 1, text: "Rớt nước mắt", text_color: "#FFFFFF", type: "static_content" } }
                ]
            }
        ])
    });
}

$done({ body: JSON.stringify(obj) });
