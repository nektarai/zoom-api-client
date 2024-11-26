export class ZoomError extends Error {
    constructor(msg) {
        super(msg);

        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}

export type ZoomClientOptions = {
    clientId: string;
    clientSecret: string;
    accountId?: string;
    redirectUri?: string;
    verificationKey?: string;
};

export type ZoomRequest = {
    method: 'GET' | 'POST';
    url: string;
    params?: Record<string, any>;
    body?: RequestInit['body'];
    headers?: Record<string, string>;
};
export type ZoomRequestOptions = {
    /**
     * Default: 5000
     */
    requestTimeoutMs?: number;
    textFile?: boolean;
} & Record<string, any>;

export type ZoomResponse = Record<string, any> | string | null;

export type ZoomSuccess = { success: boolean };

export type ZoomTokensResponse$Success = {
    access_token: string;
    token_type: 'bearer';
    refresh_token?: string;
    expires_in: number;
    scope: string;
};
export type ZoomTokensResponse$Failure = { error: string; reason: string };
export type ZoomTokensResponse =
    | ZoomTokensResponse$Success
    | ZoomTokensResponse$Failure;

export type ZoomTokens = Partial<ZoomTokensResponse$Success> &
    Required<
        Pick<ZoomTokensResponse$Success, 'access_token' | 'refresh_token'>
    >;

/* --- APIs --- */

export type ZoomApi$Users$$Status = 'pending' | 'active' | 'inactive';

export type ZoomApi$Users$List = {
    /**
     * A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token: string;
    page_count: number;
    page_number: number;
    page_size: number;
    total_records: number;
    users: ZoomApi$Users$List$$User[];
};

export type ZoomApi$Users$Get = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    type: 2;
    role_name: string;
    pmi: 1234567890;
    use_pmi: false;
    vanity_url: string;
    personal_meeting_url: string;
    timezone: string;
    verified: 1;
    dept: string;
    created_at: string;
    last_login_time: string;
    last_client_version: string;
    pic_url: string;
    host_key: string;
    jid: string;
    group_ids: string[];
    im_group_ids: string[];
    account_id: string;
    language: string;
    phone_country: string;
    phone_number: string;
    status: ZoomApi$Users$$Status;
};

export type ZoomApi$Users$List$$User = {
    /**
     * The time at which the user's account was created.
     */
    created_at: string;

    /**
     * This field is only returned if users are assigned custom attributes and you provided the custom_attributes value for the include_fields query parameter in the API request.
     */
    custom_attributes: { key: string; name: string; value: string }[];
    dept: string;
    email: string;
    employee_unique_id?: string;
    first_name: string;
    group_ids: string[];
    /**
     * The user's ID.
     * The API does not return this value for users with the pending status.
     */
    id: string;
    im_group_ids: string[];
    last_client_version: string;
    /**
     * The user's last login time. This field has a three-day buffer period.
     * For example, if user first logged in on 2020-01-01 and then logged out and logged in on 2020-01-02, this value will still reflect the login time of 2020-01-01. However, if the user logs in on 2020-01-04, the value of this field will reflect the corresponding login time since it exceeds the three-day buffer period.
     */
    last_login_time: string;
    last_name: string;
    /**
     * This field is returned if the user is enrolled in the Zoom United plan. The license option:
     */
    plan_united_type?:
        | 1
        | 2
        | 4
        | 8
        | 16
        | 32
        | 64
        | 128
        | 256
        | 512
        | 1024
        | 2048
        | 4096
        | 8192
        | 16384
        | 32768
        | 65536
        | 131072;
    pmi: number;
    role_id: string;
    status: ZoomApi$Users$$Status;
    timezone: string;
    /**
     * 1 — Basic.
     * 2 — Licensed.
     * 3 — On-prem.
     * 99 — None
     */
    type: 1 | 2 | 3 | 99;
    /**
     * 1 — A verified user email.
     * 0 — The user's email not verified.
     */
    verified: 1 | 0;
};

export type ZoomApi$PastMeeting$Participants$$Participant = {
    id: string;
    name: string;
    user_email?: string;
};

export type ZoomApi$PastMeeting$Participants = {
    next_page_token: string;
    page_count: number;
    page_size: number;
    total_records: number;
    participants: ZoomApi$PastMeeting$Participants$$Participant[];
};

export type ZoomApi$Meetings$List$$Meeting = {
    agenda: string;
    created_at: string;
    duration: number;
    host_id: string;
    id: number;
    join_url: string;
    pmi: string;
    start_time: string;
    timezone: string;
    topic: string;
    type: number;
    uuid: string;
};

export type ZoomApi$Meetings$List = {
    next_page_token: string;
    page_count: number;
    page_number: number;
    page_size: number;
    total_records: number;
    meetings: ZoomApi$Meetings$List$$Meeting[];
};

export type ZoomApi$Meetings$Get = {
    assistant_id: string;
    host_email: string;
    host_id: string;
    id: number;
    uuid: string;
    agenda: string;
    created_at: string;
    duration: number;
    encrypted_password: string;
    h323_password: string;
    join_url: string;
    occurrences: {
        duration: number;
        occurrence_id: string;
        start_time: string;
        status: string;
    }[];
    password: string;
    pmi?: string;
    pre_schedule: boolean;
    recurrence: {
        end_date_time: string;
        /**
         * Default: 1
         * Select how many times the meeting should recur before it is canceled.
         * (Cannot be used with "end_date_time".)
         */
        end_times: number;
        /**
         * Use this field only if you're scheduling a recurring meeting of type 3 to state which day in a month, the meeting should recur. The value range is from 1 to 31.
         *
         * For instance, if you would like the meeting to recur on 23rd of each month, provide 23 as the value of this field and 1 as the value of the repeat_interval field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the repeat_interval field to 3.
         */
        monthly_day: number;
        /**
         * Use this field only if you're scheduling a recurring meeting of type 3 to state the week of the month when the meeting should recur. If you use this field, you must also use the monthly_week_day field to state the day of the week when the meeting should recur.
         *
         * -1 - Last week of the month.
         * 1 - First week of the month.
         * 2 - Second week of the month.
         * 3 - Third week of the month.
         * 4 - Fourth week of the month.
         */
        monthly_week: -1 | 1 | 2 | 3 | 4;
        /**
         * Use this field only if you're scheduling a recurring meeting of type 3 to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the monthly_week field.
         *
         * 1 - Sunday.
         * 2 - Monday.
         * 3 - Tuesday.
         * 4 - Wednesday.
         * 5 - Thursday.
         * 6 - Friday.
         * 7 - Saturday.
         */
        monthly_week_day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /**
         * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as 2 and the value of the type parameter as 3.
         */
        repeat_interval: number;
        /**
         * 1 - Daily.
         * 2 - Weekly.
         * 3 - Monthly.
         */
        type: 1 | 2 | 3;
        /**
         * Default: "1"
         * This field is required if you're scheduling a recurring meeting of type 2 to state which day(s) of the week the meeting should repeat.
         *
         * The value for this field could be a number between 1 to 7 in string format. For instance, if the meeting should recur on Sunday, provide "1" as the value of this field.
         *
         * Note: If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide "1,3" as the value of this field.
         *
         * 1 - Sunday.
         * 2 - Monday.
         * 3 - Tuesday.
         * 4 - Wednesday.
         * 5 - Thursday.
         * 6 - Friday.
         * 7 - Saturday.
         */
        weekly_days: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    settings: {
        // TMI. Fill in if required
        /*
        allow_multiple_devices: true;
        alternative_hosts: 'jchill@example.com;thill@example.com';
        alternative_hosts_email_notification: true;
        alternative_host_update_polls: true;
        approval_type: 0;
        approved_or_denied_countries_or_regions: {
            approved_list: ['CX'];
            denied_list: ['CA'];
            enable: true;
            method: 'approve';
        };
        audio: 'telephony';
        authentication_domains: 'example.com';
        authentication_exception: [
            {
                email: 'jchill@example.com';
                name: 'Jill Chill';
                join_url: 'https://example.com/s/11111';
            },
        ];
        authentication_name: 'Sign in to Zoom';
        authentication_option: 'signIn_D8cJuqWVQ623CI4Q8yQK0Q';
        auto_recording: 'cloud';
        breakout_room: {
            enable: true;
            rooms: [
                {
                    name: 'room1';
                    participants: ['jchill@example.com'];
                },
            ];
        };
        calendar_type: 1;
        close_registration: false;
        cn_meeting: false;
        contact_email: 'jchill@example.com';
        contact_name: 'Jill Chill';
        custom_keys: [
            {
                key: 'key1';
                value: 'value1';
            },
        ];
        email_notification: true;
        encryption_type: 'enhanced_encryption';
        enforce_login: true;
        enforce_login_domains: 'example.com';
        focus_mode: true;
        global_dial_in_countries: ['US'];
        global_dial_in_numbers: [
            {
                city: 'New York';
                country: 'US';
                country_name: 'US';
                number: '+1 1000200200';
                type: 'toll';
            },
        ];
        host_video: true;
        in_meeting: false;
        jbh_time: 0;
        join_before_host: true;
        language_interpretation: {
            enable: true;
            interpreters: [
                {
                    email: 'interpreter@example.com';
                    languages: 'US,FR';
                },
            ];
        };
        meeting_authentication: true;
        mute_upon_entry: false;
        participant_video: false;
        private_meeting: false;
        registrants_confirmation_email: true;
        registrants_email_notification: true;
        registration_type: 1;
        show_share_button: true;
        use_pmi: false;
        waiting_room: false;
        watermark: false;
        host_save_video_order: true;
        */
    };
    start_time: string;
    start_url: string;
    status: 'waiting' | 'started';
    timezone: string;
    topic: string;
    tracking_fields: {
        field: string;
        value: string;
        visible: boolean;
    }[];
    /**
     * Default: 2
     * Meeting Types:
     * 1 - Instant meeting.
     * 2 - Scheduled meeting.
     * 3 - Recurring meeting with no fixed time.
     * 4 - PMI Meeting
     * 8 - Recurring meeting with a fixed time.
     */
    type: 1 | 2 | 3 | 8;
};

export type ZoomApi$Meetings$Recordings = {
    account_id: string;
    duration: number;
    host_id: string;
    id: number;
    recording_count: number;
    start_time: string;
    topic: string;
    total_size: number;
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 99;
    uuid: string;
    recording_play_passcode: string;
    recording_files: {
        deleted_time: string;
        download_url: string;
        file_path: string;
        file_size: number;
        file_type:
            | 'MP4'
            | 'M4A'
            | 'CHAT'
            | 'TRANSCRIPT'
            | 'CSV'
            | 'TB'
            | 'CC'
            | 'CHAT_MESSAGE'
            | 'SUMMARY';
        file_extension: 'MP4' | 'M4A' | 'TXT' | 'VTT' | 'CSV' | 'JSON' | 'JPG';
        id: string;
        meeting_id: string;
        play_url: string;
        recording_end: string;
        recording_start: string;
        recording_type:
            | 'shared_screen_with_speaker_view(CC)'
            | 'shared_screen_with_speaker_view'
            | 'shared_screen_with_gallery_view'
            | 'active_speaker'
            | 'gallery_view'
            | 'shared_screen'
            | 'audio_only'
            | 'audio_transcript'
            | 'chat_file'
            | 'poll'
            | 'host_video'
            | 'closed_caption'
            | 'timeline'
            | 'thumbnail'
            | 'audio_interpretation'
            | 'summary'
            | 'summary_next_steps'
            | 'summary_smart_chapters'
            | 'sign_interpretation'
            | 'production_studio';
        status: string;
    }[];
    download_access_token: string;
    password: string;
    participant_audio_files: {
        download_url: string;
        file_name: string;
        file_path: string;
        file_size: string;
        file_type: string;
        id: string;
        play_url: string;
        recording_end: string;
        recording_start: string;
        status: string;
    }[];
};

export type ZoomApi$PastMeeting$Details = {
    id: number;
    uuid: string;
    duration: number;
    start_time: string;
    end_time: string;
    host_id: string;
    dept: string;
    participants_count: number;
    source: string;
    topic: string;
    total_minutes: number;
    type: number;
    user_email: string;
    user_name: string;
};

export type ZoomApi$Reports$Meetings = {
    next_page_token: string;
    page_count: number;
    page_size: number;
    total_records: number;
    from: string;
    meetings: ZoomApi$Reports$Meetings$$Meeting[];
    to: string;
};

export type ZoomApi$Reports$Meetings$$Meeting = {
    custom_keys: {
        key: string;
        value: string;
    }[];
    duration: number;
    /**
     * date and time
     */
    end_time: string;
    id: number;
    participants_count: number;
    session_key: string;
    source: string;
    start_time: string;
    topic: string;
    total_minutes: number;
    /**
     * The meeting type:
     *
     * 1 — An instant meeting.
     * 2 — A scheduled meeting.
     * 3 — A recurring meeting with no fixed time.
     * 4 — A personal meeting room.
     * 8 — A recurring meeting with a fixed time.
     */
    type: 1 | 2 | 3 | 4 | 8;
    user_email: string;
    user_name: string;
    uuid: string;
    schedule_time: string;
    join_waiting_room_time: string;
    join_time: string;
    leave_time: string;
};

export type ZoomEventBody<T> = {
    event: string;
    payload: T & {
        client_id: string;
        signature: string;
    };
};

export type ZoomEventRequest<T = Record<string, string>> = {
    body: ZoomEventBody<T>;
    headers: Record<string, string>;
};
