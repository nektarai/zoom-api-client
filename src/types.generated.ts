/**
 * Auto-generated Zoom API types from OpenAPI spec.
 * Do not edit manually - run `npm run generate` to regenerate.
 */

/** Perform batch registration - Request body */
export type ZoomApi$Add$Batch$Registrants$Request = {
    /** If a meeting was scheduled with approval_type `1` (manual approval), but you would like to automatically approve the registrants that are added via this API, you can set the value of this field to `true`. 

You **cannot** use this field to change approval setting for a meeting  that was originally scheduled with approval_type `0` (automatic approval). */
    auto_approve?: boolean;
    /** Send confirmation Email to Registrants */
    registrants_confirmation_email?: boolean;
    registrants?: {
        /** Email address of the registrant. */
        email: string;
        /** First name of the registrant. */
        first_name: string;
        /** Last name of the registrant. */
        last_name?: string;
    }[];
};

/** Perform batch registration - Response */
export type ZoomApi$Add$Batch$Registrants$Response = {
    registrants?: {
        /** Email address of the registrant. */
        email?: string;
        /** Unique URL using which registrant can join the meeting. */
        join_url?: string;
        /** Unique identifier of the registrant. */
        registrant_id?: string;
        /** The participant PIN code is used to authenticate audio participants before they join the meeting. */
        participant_pin_code?: number;
    }[];
};

/** Perform batch registration - Request body */
export type ZoomApi$Add$Batch$Webinar$Registrants$Request = {
    /** If a meeting was scheduled with approval_type `1` (manual approval), but you want to automatically approve registrants added via this API, set the value of this field to `true`. 

You **cannot** use this field to change approval setting for a meeting that was originally scheduled with approval_type `0` (automatic approval). */
    auto_approve?: boolean;
    registrants?: {
        /** The registrant's email address. */
        email: string;
        /** The registrant's first name. */
        first_name: string;
        /** The registrant's last name. */
        last_name?: string;
    }[];
};

/** Perform batch registration - Response */
export type ZoomApi$Add$Batch$Webinar$Registrants$Response = {
    registrants?: {
        /** The registrant's email address. */
        email?: string;
        /** Unique URL using which registrant can join the webinar. */
        join_url?: string;
        /** The registrant's unique identifier. */
        registrant_id?: string;
    }[];
};

/** Add a new device - Request body */
export type ZoomApi$Add$Device$Request = {
    /** The device's name. */
    device_name: string;
    /** The device's mac address. */
    mac_address: string;
    /** The device's serial number. */
    serial_number: string;
    /** The device's manufacturer. */
    vendor: string;
    /** The device's model. */
    model: string;
    /** The Zoom Room's ID. Only for Zoom Room devices. */
    room_id?: string;
    /** User email for assigning the Zoom Phone device. Only for Zoom Phone devices. */
    user_email?: string;
    /** Device type.  
 `0` - Zoom Rooms computer.  
 `1` - Zoom Rooms controller.  
 `5` - Zoom Phone appliance. */
    device_type: 0 | 1 | 5;
    /** The name of the tag. */
    tag?: string;
    /** The ZDM group ID. */
    zdm_group_id?: string;
    /** The extension number. */
    extension_number?: string;
};

/** Get a meeting or webinar recording's analytics details - Query parameters */
export type ZoomApi$Analytics$Details$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date. */
    from: string;
    /** The end date for the monthly range to query. The maximum range can be a month. */
    to: string;
    /** The type of analytics details:
     * `by_view` &mdash; by_view.
     * `by_download` &mdash; by_download. */
    type: 'by_view' | 'by_download';
}>;

/** Get a meeting or webinar recording's analytics details - Response */
export type ZoomApi$Analytics$Details$Response = {
    /** The queried start date */
    from?: string;
    /** The queried end date. */
    to?: string;
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of records returned within a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
    /** Analytics Detail. */
    analytics_details?: {
        /** Explicit time to watch or download the recording. */
        date_time?: string;
        /** The user's name who watched or downloaded. */
        name?: string;
        /** The user's email who downloaded this Meeting Recording. */
        email?: string;
        /** When the query type is `by_view`, this field indicates the viewing time, unit: seconds */
        duration?: number;
    }[];
};

/** Get a meeting or webinar recording's analytics summary - Query parameters */
export type ZoomApi$Analytics$Summary$Params = Partial<{
    /** The start date for the monthly range to query. The maximum range can be a month. If you do not provide this value, this defaults to the current date. */
    from: string;
    /** The end date for the monthly range to query. The maximum range can be a month. */
    to: string;
}>;

/** Get a meeting or webinar recording's analytics summary - Response */
export type ZoomApi$Analytics$Summary$Response = {
    /** The queried start date */
    from?: string;
    /** The queried end date. */
    to?: string;
    /** Analytics Summary. */
    analytics_summary?: {
        /** Date of viewing or downloading the recording. */
        date?: string;
        /** The number of people who have watched this Meeting Recording. */
        views_total_count?: number;
        /** The number of people who downloaded this Meeting Recording. */
        downloads_total_count?: number;
    }[];
};

/** Assign a device to a group - Query parameters */
export type ZoomApi$Assgin$Group$Params = Partial<{
    /** The group's ID. */
    group_id: string;
}>;

/** Assign a device to a user or commonarea - Request body */
export type ZoomApi$Assigndevicetoauser$Commonarea$Request = {
    /** The extension number. */
    extension_number?: string;
    /** The device's mac address. */
    mac_address: string;
    /** The device's manufacturer. */
    vendor: string;
};

/** Change device association - Request body */
export type ZoomApi$Change$Device$Association$Request = {
    /** The Zoom Room ID of the device being associated to. The `room_id` is required. It can be ` ` or the specific room ID. If it is ` ` , it means release from the room. If the room ID is a specific value, assign that room to the device . */
    room_id?: string;
    /** Specify one of these values for this field.

`ZR` - Zoom Room computer.  
 
`ZRC` - Zoom Room controller.  
 
`ZRP` - Scheduling display.  
 
`ZRW` - Companion whiteboard. */
    app_type?: 'ZR' | 'ZRC' | 'ZRP' | 'ZRW';
};

/** Perform batch poll creation - Request body */
export type ZoomApi$Create$Batch$Polls$Request = {
    /** The information about the meeting's polls. */
    polls?: {
        /** Whether to allow meeting participants to answer poll questions anonymously: 
* `true` &mdash; Anonymous polls enabled. 
* `false` &mdash; Participants cannot answer poll questions anonymously. 

This value defaults to `false`. */
        anonymous?: boolean;
        /** The type of poll: 
* `1` &mdash; Poll. 
* `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` &mdash; Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
        poll_type?: 1 | 2 | 3;
        /** The information about the poll's questions. */
        questions?: {
            /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
             * For `short_answer` polls, a maximum of 500 characters.
             * For `long_answer` polls, a maximum of 2,000 characters. */
            answer_max_character?: number;
            /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
            answer_min_character?: number;
            /** Whether participants must answer the question: 
* `true` &mdash; The participant must answer the question. 
* `false` &mdash; The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
            answer_required?: boolean;
            /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
            answers?: string[];
            /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
            case_sensitive?: boolean;
            /** The poll question's title, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
            name?: string;
            /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
                /** The question prompt's correct answers:
                 * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
                 * For `rank_order` polls, you can only provide one correct answer. */
                prompt_right_answers?: string[];
            }[];
            /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
            rating_max_label?: string;
            /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
            rating_max_value?: number;
            /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
            rating_min_label?: string;
            /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
            rating_min_value?: number;
            /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
            right_answers?: string[];
            /** Whether to display the radio selection as a drop-down box: 
* `true` &mdash; Show as a drop-down box. 
* `false` &mdash; Do not show as a drop-down box. 

This value defaults to `false`. */
            show_as_dropdown?: boolean;
            /** The poll's question and answer type:
             * `single` &mdash; Single choice.
             * `multiple` &mdash; Multiple choice.
             * `matching` &mdash; Matching.
             * `rank_order` &mdash; Rank order.
             * `short_answer` &mdash; Short answer.
             * `long_answer` &mdash; Long answer.
             * `fill_in_the_blank` &mdash; Fill in the blank.
             * `rating_scale` &mdash; Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
        }[];
        /** The poll's title, up to 64 characters. */
        title?: string;
    }[];
};

/** Perform batch poll creation - Response */
export type ZoomApi$Create$Batch$Polls$Response = {
    polls?: {
        /** Whether to allow meeting participants to answer poll questions anonymously:
         * `true` &mdash; Anonymous polls enabled.
         * `false` &mdash; Participants cannot answer poll questions anonymously. */
        anonymous?: boolean;
        /** Meeting Poll ID */
        id?: string;
        /** The type of poll:
         * `1` &mdash; Poll.
         * `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account.
         * `3` &mdash; Quiz. This feature must be enabled in your Zoom account. */
        poll_type?: 1 | 2 | 3;
        /** The information about the poll's questions. */
        questions?: {
            /** The allowed maximum number of characters. This field only returns for `short_answer` and `long_answer` polls. */
            answer_max_character?: number;
            /** The allowed minimum number of characters. This field only returns for `short_answer` and `long_answer` polls. */
            answer_min_character?: number;
            /** Whether participants must answer the question:
             * `true` &mdash; The participant must answer the question.
             * `false` &mdash; The participant does not need to answer the question. */
            answer_required?: boolean;
            /** The poll question's available answers. */
            answers?: string[];
            /** Whether the correct answer is case sensitive. This field only returns for `fill_in_the_blank` polls:
             * `true` &mdash; The answer is case-sensitive.
             * `false` &mdash; The answer is not case-sensitive. */
            case_sensitive?: boolean;
            /** The poll question's title. For `fill_in_the_blank` polls, this field is the poll's question. */
            name?: string;
            /** The information about the prompt questions. This object only returns for `matching` and `rank_order` polls. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
                /** The question prompt's correct answers. */
                prompt_right_answers?: string[];
            }[];
            /** The high score label for the `rating_max_value` field. This field only returns for `rating_scale` polls. */
            rating_max_label?: string;
            /** The rating scale's maximum value. This field only returns for `rating_scale` polls. */
            rating_max_value?: number;
            /** The low score label for the `rating_min_value` field. This field only returns for `rating_scale` polls. */
            rating_min_label?: string;
            /** The rating scale's minimum value. This field only returns for `rating_scale` polls. */
            rating_min_value?: number;
            /** The poll question's correct answer(s). */
            right_answers?: string[];
            /** Whether to display the radio selection as a drop-down box:
             * `true` &mdash; Show as a drop-down box.
             * `false` &mdash; Do not show as a drop-down box. */
            show_as_dropdown?: boolean;
            /** The poll's question and answer type:
             * `single` &mdash; Single choice.
             * `multiple` &mdash; Multiple choice.
             * `matching` &mdash; Matching.
             * `rank_order` &mdash; Rank order.
             * `short_answer` &mdash; Short answer.
             * `long_answer` &mdash; Long answer.
             * `fill_in_the_blank` &mdash; Fill in the blank.
             * `rating_scale` &mdash; Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
        }[];
        /** The status of the meeting poll:  
 `notstart` - Poll not started  
 `started` - Poll started  
 `ended` - Poll ended  
 `sharing` - Sharing poll results */
        status?: 'notstart' | 'started' | 'ended' | 'sharing';
        /** The title for the poll. */
        title?: string;
    }[];
};

/** Create a webinar's branding name tag - Request body */
export type ZoomApi$Create$Webinar$Branding$Name$Tag$Request = {
    /** The name tag's name.

**Note:** This value cannot exceed more than 50 characters. */
    name: string;
    /** The name tag's text color. */
    text_color: string;
    /** The name tag's accent color. */
    accent_color: string;
    /** The name tag's background color. */
    background_color: string;
    /** Whether set the name tag as the default name tag or not. */
    is_default?: boolean;
    /** Whether to set the name tag as the new default for all panelists or not. This includes panelists not currently assigned a default name tag. */
    set_default_for_all_panelists?: boolean;
};

/** Create a webinar's branding name tag - Response */
export type ZoomApi$Create$Webinar$Branding$Name$Tag$Response = {
    /** The name tag's ID. */
    id?: string;
    /** The name tag's name. */
    name?: string;
    /** The name tag's text color. */
    text_color?: string;
    /** The name tag's accent color. */
    accent_color?: string;
    /** The name tag's background_color color. */
    background_color?: string;
    /** Whether the name tag is the default name tag or not. */
    is_default?: boolean;
};

/** Delete a live meeting message - Query parameters */
export type ZoomApi$Delete$Meeting$Chat$Message$By$Id$Params = Partial<{
    /** The live webinar chat file's universally unique identifier, in base64-encoded format. Separate multiple values with commas. */
    file_ids: string;
}>;

/** Delete a webinar's branding name tag - Query parameters */
export type ZoomApi$Delete$Webinar$Branding$Name$Tag$Params = Partial<{
    /** A comma-separated list of the name tag IDs to delete. */
    name_tag_ids: string;
}>;

/** Delete a webinar's branding virtual backgrounds - Query parameters */
export type ZoomApi$Delete$Webinar$Branding$V$B$Params = Partial<{
    /** A comma-separated list of the virtual background file IDs to delete. */
    ids: string;
}>;

/** Delete a live webinar message - Query parameters */
export type ZoomApi$Delete$Webinar$Chat$Message$By$Id$Params = Partial<{
    /** The live webinar chat file's universally unique identifier (UUID), in base64-encoded format. Separate multiple values with commas. */
    file_ids: string;
}>;

/** Delete a webinar registrant - Query parameters */
export type ZoomApi$Delete$Webinar$Registrant$Params = Partial<{
    /** The webinar occurrence ID. */
    occurrence_id: string;
}>;

/** Create a H.323/SIP device - Request body */
export type ZoomApi$Device$Create$Request = {
    /** Device encryption:  
 `auto` - auto.  
 `yes` - yes.  
 `no` - no. */
    encryption: 'auto' | 'yes' | 'no';
    /** Device IP. */
    ip: string;
    /** Device name. */
    name: string;
    /** Device protocol:  
 `H.323` - H.323.  
 `SIP` - SIP. */
    protocol: 'H.323' | 'SIP';
};

/** Create a H.323/SIP device - Response */
export type ZoomApi$Device$Create$Response = {
    /** Device ID. */
    id?: string;
} & {
    /** Device encryption:  
 `auto` - auto.  
 `yes` - yes.  
 `no` - no. */
    encryption: 'auto' | 'yes' | 'no';
    /** Device IP. */
    ip: string;
    /** Device name. */
    name: string;
    /** Device protocol:  
 `H.323` - H.323.  
 `SIP` - SIP. */
    protocol: 'H.323' | 'SIP';
};

/** List H.323/SIP devices - Query parameters */
export type ZoomApi$Device$List$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** List H.323/SIP devices - Response */
export type ZoomApi$Device$List$Response = {
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** List of H.323/SIP Device objects. */
    devices?: ({
        /** Device ID. */
        id?: string;
    } & {
        /** Device encryption:  
 `auto` - auto.  
 `yes` - yes.  
 `no` - no. */
        encryption: 'auto' | 'yes' | 'no';
        /** Device IP. */
        ip: string;
        /** Device name. */
        name: string;
        /** Device protocol:  
 `H.323` - H.323.  
 `SIP` - SIP. */
        protocol: 'H.323' | 'SIP';
    })[];
};

/** Update a H.323/SIP device - Request body */
export type ZoomApi$Device$Update$Request = {
    /** Device encryption:  
 `auto` - auto.  
 `yes` - yes.  
 `no` - no. */
    encryption: 'auto' | 'yes' | 'no';
    /** Device IP. */
    ip: string;
    /** Device name. */
    name: string;
    /** Device protocol.  
 `H.323` - H.323.  
 `SIP` - SIP. */
    protocol: 'H.323' | 'SIP';
};

/** Enable SIP phone - Request body */
export type ZoomApi$Enable$S$I$P$Phone$Phones$Request = {
    /** The authorization name of the user that is registered for SIP phone. */
    authorization_name: string;
    /** The name or IP address of your provider's SIP domain, such as example.com.  */
    domain: string;
    /** The password generated for the user in the SIP account. */
    password: string;
    /** The number of minutes after which the SIP registration of the Zoom client user expires, and the client will auto register to the SIP server. */
    registration_expire_time?: number;
    /** The email address of the user to associate with the SIP Phone. Can add `.pc`, `.mobile`, `.pad` at the end of the email, such as `user@example.com.pc`, to add accounts for different platforms for the same user. */
    user_email: string;
    /** The phone number associated with the user in the SIP account. */
    user_name: string;
    /** The number to dial for checking voicemail. */
    voice_mail?: string;
    /** The displayed phone number associated with the user can be either in extension format or E.164 format. You can specify the displayed number when the dialable number differs from the SIP username. */
    display_number?: string;
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server_2?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server_3?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
};

/** Enable SIP phone - Response */
export type ZoomApi$Enable$S$I$P$Phone$Phones$Response = {
    /** The SIP phone ID. */
    phone_id?: string;
    /** The authorization name of the user that is registered for SIP phone. */
    authorization_name?: string;
    /** The name or IP address of your provider's SIP domain (example: CDC.WEB).  */
    domain?: string;
    /** The password generated for the user in the SIP account. */
    password?: string;
    /** The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server. */
    registration_expire_time?: number;
    /** The email address of the user to associate with the SIP Phone. Can add `.pc`, `.mobile`, `.pad` at the end of the email (for example, `user@example.com.mac`) to add accounts for different platforms for the same user. */
    user_email?: string;
    /** The phone number associated with the user in the SIP account. */
    user_name?: string;
    /** The number to dial for checking voicemail. */
    voice_mail?: string;
    /** The displayed phone number associated with the user can be either in extension format or E.164 format. You can specify the displayed number when the dialable number differs from the SIP username. */
    display_number?: string;
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server_2?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server_3?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
};

/** Get archived file statistics - Query parameters */
export type ZoomApi$Get$Archived$File$Statistics$Params = Partial<{
    /** The query start date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days. */
    from: string;
    /** The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days. */
    to: string;
}>;

/** Get archived file statistics - Response */
export type ZoomApi$Get$Archived$File$Statistics$Response = {
    /** The queried start date. */
    from?: string;
    /** The queried end date. */
    to?: string;
    /** The total number of returned meeting records. */
    total_records?: number;
    /** Statistics about archive files, by file extension. */
    statistic_by_file_extension?: {
        /** The number of mp4 files. */
        mp4_file_count?: number;
        /** The number of m4a files. */
        m4a_file_count?: number;
        /** The number of txt files. */
        txt_file_count?: number;
        /** The number of json files. */
        json_file_count?: number;
        /** The number of vtt files. */
        vtt_file_count?: number;
    };
    /** Statistics about archive files, by file status. */
    statistic_by_file_status?: {
        /** The number of processing files. */
        processing_file_count?: number;
        /** The number of completed files. */
        completed_file_count?: number;
        /** The number of failed files. */
        failed_file_count?: number;
    };
};

/** Get a meeting's archived files - Response */
export type ZoomApi$Get$Archived$Files$Response = {
    /** The user's account name. */
    account_name: string;
    /** Information about the archive files. */
    archive_files: {
        /** The URL to download the the archive file. 

 **OAuth apps** 

 If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](/docs/integrations/oauth/) to download the file. For example: 

 `https://{{base-domain}}/rec/archive/download/xxx--header 'Authorization: Bearer {{OAuth-access-token}}'` 

 **Note:** This field does **not** return for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). Instead, this API will return the `file_path` field. */
        download_url: string;
        /** The archived file's extension. */
        file_extension: string;
        /** The file path to the on-premise account archive file. 

 **Note:** The API only returns this field for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field. */
        file_path?: string;
        /** The archived file's size, in bytes. */
        file_size: number;
        /** The archive file's type.
         * `MP4` - Video file.
         * `M4A` - Audio-only file.
         * `CHAT` - A TXT file containing in-meeting chat messages.
         * `CC` - A file containing the closed captions of the recording, in VTT file format.
         * `CHAT_MESSAGE` - A JSON file encoded in base64 format containing chat messages. The file also includes waiting room chats, deleted messages, meeting emojis and non-verbal feedback.
         *  `TRANSCRIPT` - A JSON file include audio transcript wording.
         * `SUB_GROUP_MEMBER_LOG` - A JSON file containing records of members entering and leaving the subgroup.
         * `AIC_COVERSATION` - A json file include internal user archive aic content. */
        file_type:
            | 'MP4'
            | 'M4A'
            | 'CHAT'
            | 'CC'
            | 'CHAT_MESSAGE'
            | 'TRANSCRIPT'
            | 'SUB_GROUP_MEMBER_LOG'
            | 'AIC_COVERSATION';
        /** The archive file's unique ID. */
        id: string;
        /** Whether the archive file is an individual recording file.
         * `true` - An individual recording file.
         * `false` - An entire meeting file. */
        individual: boolean;
        /** The individual recording file's participant email address. This value is returned when the `individual` value is `true`. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](/docs/api/using-zoom-apis/#email-address-display-rules) for details. */
        participant_email?: string;
        /** The join time for the generated recording file. If this value is returned when the individual value is true, then it is the recording file's participant join time. When the individual value is false, it returns the join time for the archiving gateway. */
        participant_join_time: string;
        /** The leave time for the generated recording file. If this value is returned when the individual value is true, then it is the recording file's participant leave time. When the individual value is false, it returns the leave time for the archiving gateway. */
        participant_leave_time: string;
        /** The archive file's recording type. 
* `shared_screen_with_speaker_view` 
* `audio_only` 
* `chat_file` 
* `closed_caption` 
* `chat_message` 
* `audio_transcript` 
* `aic_conversation` 

 For more information, read our [Managing and sharing cloud recordings](https://support.zoom.us/hc/en-us/articles/205347605-Managing-and-sharing-cloud-recordings#h_9898497b-e736-4980-a749-d55608f10773) documentation. */
        recording_type:
            | 'shared_screen_with_speaker_view'
            | 'audio_only'
            | 'chat_file'
            | 'closed_caption'
            | 'chat_message'
            | 'audio_transcript'
            | 'aic_conversation';
        /** The archived file's processing status.
         * `completed` - The processing of the file is complete.
         * `processing` - The file is processing.
         * `failed` - The processing of the file failed. */
        status: 'completed' | 'processing' | 'failed';
        /** The archived file's encryption fingerprint, using the SHA256 hash algorithm. */
        encryption_fingerprint: string;
        /** The number of `TXT` or `JSON` file messages. This field returns only when the `file_extension` is `JSON` or `TXT` */
        number_of_messages?: number;
        /** The region where the file is stored. This field returns only `Enable Distributed Compliance Archiving` op feature is enabled. */
        storage_location?:
            | 'US'
            | 'AU'
            | 'BR'
            | 'CA'
            | 'EU'
            | 'IN'
            | 'JP'
            | 'SG'
            | 'CH';
        /** Whether to auto delete the archived file.

 **Prerequisites:** 

* The "Tag Archiving Files for Deletion" feature must be enabled in OP. Contact [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to open.
 */
        auto_delete?: boolean;
    }[];
    /** The meeting or webinar's archive completion time. */
    complete_time: Record<string, any> | '';
    /** The meeting or webinar's scheduled duration. */
    duration: number;
    /** The meeting or webinar's duration, in seconds. */
    duration_in_second: number;
    /** The host's user ID for the archived meeting or webinar. */
    host_id: string;
    /** The meeting or webinar ID, either `meetingId` or `webinarId`. */
    id: number;
    /** Whether the room is a [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms). */
    is_breakout_room: boolean;
    /** Whether the meeting or webinar is internal or external. 
* `internal` - An internal meeting or webinar. 
* `external` - An external meeting or webinar. 

 The `id`, `host_id`, and `topic` PII (Personal Identifiable Information) values in this response are removed when this value is `external`. */
    meeting_type: 'internal' | 'external';
    /** The parent meeting's universally unique ID (UUID). Each meeting or webinar instance generates a UUID. If the `is_breakout_room` value is `true`, the API returns this value. */
    parent_meeting_id?: string;
    /** The number of archived files returned in the API call response. */
    recording_count: number;
    /** The meeting or webinar's start time. */
    start_time: string;
    /** The meeting or webinar's [timezone](/docs/api/references/abbreviations/#timezones). */
    timezone: string;
    /** The meeting or webinar topic. */
    topic: string;
    /** The total size of the archive file, in bytes. */
    total_size: number;
    /** The type of archived meeting or webinar. 

 If the recording is of a meeting: 
* `1` - Instant meeting. 
* `2` - Scheduled meeting. 
* `3` - A recurring meeting with no fixed time. 
* `4` - A meeting created via PMI (Personal Meeting ID). 
* `7` - A [Personal Audio Conference](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) (PAC). 
* `8` - Recurring meeting with a fixed time. 

 If the recording is of a webinar: 
* `5` - A webinar. 
* `6` - A recurring webinar without a fixed time. 
* `9` - A recurring webinar with a fixed time. 

 If the recording is **not** from a meeting or webinar: 

* `100` - A [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms). */
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
    /** The universally unique identifier (UUID) of the recorded meeting or webinar instance. Each meeting or webinar instance generates a UUID. */
    uuid: string;
    /** The archive's processing status.
     * `completed` - The archive's processing is complete.
     * `processing` - The archive is processing. */
    status: 'completed' | 'processing';
    /** Primary group IDs of participants who belong to your account. Each group ID is separated by a comma. */
    group_id?: string;
    /** Information about the physical files. */
    physical_files?: {
        /** The physical file's unique ID. */
        file_id?: string;
        /** The physical file's name. */
        file_name?: string;
        /** The physical file's size, in bytes. */
        file_size?: number;
        /** The URL to download the the archive file. 

 **OAuth apps** 

 If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](/docs/integrations/oauth/) to download the file. For example: 

 `https://{{base-domain}}/rec/archive/attached/download/xxx--header 'Authorization: Bearer {{OAuth-access-token}}'`  */
        download_url?: string;
    }[];
};

/** Get billing invoice reports - Query parameters */
export type ZoomApi$Get$Billing$Invoices$Reports$Params = Partial<{
    /** The billing report's unique identifier. Retrieve this ID from the response of **Get Billing Reports** API request. 

 */
    billing_id: string;
}>;

/** Get billing invoice reports - Response */
export type ZoomApi$Get$Billing$Invoices$Reports$Response = {
    /** Currency of the billed amount in the invoice. */
    currency?: string;
    invoices?: {
        /** End date of the invoice period. */
        end_date?: string;
        /** Name of the invoice. */
        invoice_charge_name?: string;
        /** Invoice number  */
        invoice_number?: string;
        /** Number of licenses bought. */
        quantity?: number;
        /** Start date of the invoice period. */
        start_date?: string;
        /** Tax amount in the invoice. */
        tax_amount?: string;
        /** Total billed amount in the invoice. */
        total_amount?: string;
    }[];
};

/** Get billing reports - Response */
export type ZoomApi$Get$Billing$Report$Response = {
    billing_reports?: {
        /** End date of the billing period. */
        end_date?: string;
        /** Unique Identifier of the report. Use this ID to retrieve billing invoice via the &quot;Get Billing Invoices API&quot;. 

You can also use this ID to export a CSV file of the billing report from this URL: `https://zoom.us/account/report/billing/export?id={id}`. */
        id?: string;
        /** Start date of the billing period. */
        start_date?: string;
        /** Total tax amount for this billing period. */
        tax_amount?: string;
        /** Total billing amount for this billing period. */
        total_amount?: string;
        /** Type of the billing report. The value should be either of the following:  
 
`0` - Detailed Billing Reports
`1` - Custom Billing Reports */
        type?: 0 | 1;
    }[];
    /** Currency of the billed amount. */
    currency?: string;
};

/** Get device detail - Response */
export type ZoomApi$Get$Device$Response = {
    /** The device's unique identifier. */
    device_id?: string;
    /** The name of the device. */
    device_name?: string;
    /** The device's MAC address. */
    mac_address?: string;
    /** The device's serial number. */
    serial_number?: string;
    /** The device's manufacturer. */
    vendor?: string;
    /** The device's model. */
    model?: string;
    /** The device's platform. */
    platform_os?: string;
    /** App version of Zoom Rooms. */
    app_version?: string;
    /** The tag's name. */
    tag?: string;
    /** Whether the device is enrolled in ZDM (Zoom Device Management). */
    enrolled_in_zdm?: boolean;
    /** Whether the device is connected to ZDM (Zoom Device Management). */
    connected_to_zdm?: boolean;
    /** The Zoom Room's ID. */
    room_id?: string;
    /** The Zoom Room's name. */
    room_name?: string;
    /** Filter devices by device type.  
Device Type:  
 `-1` - All Zoom Room device(0,1,2,3,4,6).  
 `0` - Zoom Rooms Computer.  
 `1` - Zoom Rooms Controller.  
 `2` - Zoom Rooms Scheduling Display.  
 `3` - Zoom Rooms Control System.  
 `4` - Zoom Rooms Whiteboard.  
 `5` - Zoom Phone Appliance.  
 `6` - Zoom Rooms Computer (with Controller). */
    device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** The SDK version. */
    sdk_version?: string;
    /** Filter devices by status.  
 Device Status:  
 `0` - offline.  
 `1` - online.  
 `-1` - unlink */
    device_status?: -1 | 0 | 1;
    /** The time when the device was last online. */
    last_online?: string;
    /** The phone device's owner. */
    user_email?: string;
};

/** Get livestream details - Response */
export type ZoomApi$Get$Meeting$Live$Stream$Details$Response = {
    /** Live streaming page URL. This is the URL using which anyone can view the livestream of the meeting. */
    page_url?: string;
    /** Stream Key. */
    stream_key?: string;
    /** Stream URL. */
    stream_url?: string;
    /** The number of pixels in each dimension that the video camera can display. */
    resolution?: string;
};

/** Get a meeting transcript - Response */
export type ZoomApi$Get$Meeting$Transcript$Response = {
    /** The meeting ID */
    meeting_id?: string;
    /** The user account's unique identifier. */
    account_id?: string;
    /** The meeting topic. */
    meeting_topic?: string;
    /** ID of the user set as the host of the meeting. */
    host_id?: string;
    /** The date and time that the meeting's transcript was created. */
    transcript_created_time?: string;
    /** Whether the meeting transcript is available for download.
`true`: The transcript is ready and `download_url` will be returned.
`false`: The transcript cannot be downloaded. and the `download_restriction_reason` field will be returned instead with the explanation.

Only when `can_download` is `true`, the transcript file can be accessed. */
    can_download?: boolean;
    /** Auto-delete status of a meeting's transcript

Prerequisite: To get the auto-delete status, the host of the recording must have the recording setting **Delete cloud recordings after a specified number of days** enabled.  */
    auto_delete?: boolean;
    /** The date when the recording will be auto-deleted when `auto_delete` is true. Otherwise, no date will be returned. */
    auto_delete_date?: string;
    /** The URL to download the transcript. 

This field is only present when `can_download` is `true`. If present, `download_restriction_reason` will not be included."


If a user has authorized and installed your OAuth app that contains recording scopes, use  the user's [OAuth access token](https://developers.zoom.us/docs/integrations/oauth/) to download the file. Set the `access_token` as a Bearer token in the Authorization header. For example: 

`curl -H 'Authorization: Bearer <ACCESS_TOKEN>' https://{{base-domain}}/rec/archive/download/xyz`. */
    download_url?: string;
    /** If `can_download` is false, this field provides the reason why the transcript cannot be downloaded.

This field is only present when `can_download` is `false`. If present, `download_url` will not be included."

| Value                | Description                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------- |
| `DELETED_OR_TRASHED` | The transcript has been deleted or moved to trash and is no longer available.                |
| `UNSUPPORTED`        | The transcript format is not supported for download. |
| `NO_TRANSCRIPT_DATA` | No transcript data exists for the meeting.                                                   |
| `NOT_READY`          | The transcript is still being processed and not yet ready for download.                      |
 */
    download_restriction_reason?:
        | 'DELETED_OR_TRASHED'
        | 'UNSUPPORTED'
        | 'NO_TRANSCRIPT_DATA'
        | 'NOT_READY';
};

/** Get a meeting SIP URI with passcode - Request body */
export type ZoomApi$Get$Sip$Dialing$With$Passcode$Request = {
    /** If customers desire that a passcode be embedded in the SIP URI dial string, they must supply the passcode. Zoom will not validate the passcode. */
    passcode?: string;
};

/** Get a meeting SIP URI with passcode - Response */
export type ZoomApi$Get$Sip$Dialing$With$Passcode$Response = {
    /** The meeting's encoded SIP URI. */
    sip_dialing?: string;
    /** Whether the API caller has a CRC (Conference Room Connector) plan. */
    paid_crc_plan_participant?: boolean;
    /** This value identifies the meeting participant. It is automatically embedded in the SIP URI if the API caller has a CRC (Conference Room Connector) plan. */
    participant_identifier_code?: string;
    /** The number of seconds the encoded SIP URI is valid before it expires. */
    expire_in?: number;
};

/** Get webinar tracking sources - Response */
export type ZoomApi$Get$Tracking$Sources$Response = {
    /** The total number of registration records for this Webinar. */
    total_records?: number;
    /** Tracking Sources object. */
    tracking_sources?: {
        /** Unique Identifier of the tracking source. */
        id?: string;
        /** Number of registrations made from this source. */
        registration_count?: number;
        /** Name of the source (platform) where the registration URL was shared. */
        source_name?: string;
        /** Tracking URL. The URL that was shared for the registration. */
        tracking_url?: string;
        /** Number of visitors who visited the registration page from this source. */
        visitor_count?: number;
    }[];
};

/** Get webinar's session branding - Response */
export type ZoomApi$Get$Webinar$Branding$Response = {
    /** Information about the webinar's [wallpaper] file. */
    wallpaper?: {
        /** The wallpaper's file ID. */
        id?: string;
    };
    /** Information about the webinar's [virtual background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background) files. */
    virtual_backgrounds?: {
        /** The virtual background's file ID. */
        id?: string;
        /** The virtual background's file name. */
        name?: string;
        /** Whether the file is the default virtual background file. */
        is_default?: boolean;
    }[];
    /** Information about the webinar's name tag. */
    name_tags?: {
        /** The name tag's ID. */
        id?: string;
        /** The name tag's name. */
        name?: string;
        /** The name tag's text color. */
        text_color?: string;
        /** The name tag's accent color. */
        accent_color?: string;
        /** The name tag's background color. */
        background_color?: string;
        /** Whether the file is the default name tag or not. */
        is_default?: boolean;
    }[];
};

/** Get live stream details - Response */
export type ZoomApi$Get$Webinar$Live$Stream$Details$Response = {
    /** Live streaming page URL. This is the URL using which anyone can view the live stream of the webinar. */
    page_url?: string;
    /** Stream key. */
    stream_key?: string;
    /** Stream URL. */
    stream_url?: string;
    /** The number of pixels in each dimension that the video camera can display. */
    resolution?: string;
};

/** Get a webinar SIP URI with passcode - Request body */
export type ZoomApi$Get$Webinar$Sip$Dialing$With$Passcode$Request = {
    /** If customers want a passcode to be embedded in the SIP URI dial string, they must supply the passcode. Zoom will not validate the passcode. */
    passcode?: string;
};

/** Get a webinar SIP URI with passcode - Response */
export type ZoomApi$Get$Webinar$Sip$Dialing$With$Passcode$Response = {
    /** The webinar's encoded SIP URI. */
    sip_dialing?: string;
    /** Whether the API caller has a Conference Room Connector (CRC) plan. */
    paid_crc_plan_participant?: boolean;
    /** This value identifies the webinar participant. It is automatically embedded in the SIP URI if the API caller has a CRC plan. */
    participant_identifier_code?: string;
    /** The number of seconds the encoded SIP URI is valid before it expires. */
    expire_in?: number;
};

/** Get Zoom Phone Appliance settings by user ID - Query parameters */
export type ZoomApi$Get$Zpa$Device$List$Profile$Setting$Ofa$User$Params =
    Partial<{
        /** The user's ID or email address. For user-level apps, pass `me` as the value for `user_id`. */
        user_id: string;
    }>;

/** Get Zoom Phone Appliance settings by user ID - Response */
export type ZoomApi$Get$Zpa$Device$List$Profile$Setting$Ofa$User$Response = {
    /** The user's language. */
    language?: string;
    /** The user's timezone. */
    timezone?: string;
    /** The ZPA information. */
    device_infos?: {
        /** The device ID. */
        device_id?: string;
        /** The device type. */
        device_type?: string;
        /** The device's manufacturer. */
        vendor?: string;
        /** The device's model name. */
        model?: string;
        /** The device's status, either `online` or `offline`. */
        status?: 'online' | 'offline';
        /** The device policy. */
        policy?: {
            hot_desking?: {
                /** The device's status, either `online` or `offline`. */
                status?: 'online' | 'offline';
            };
            call_control?: {
                /** This field lets the call control feature to the current device. Configure the desk phone devices to enable call control, which lets users perform desk phone's call control actions from the Zoom desktop client, including making and accepting calls.
                 * `unsupported`
                 * `on`
                 * `off` */
                status?: 'unsupported' | 'on' | 'off';
            };
        };
    }[];
};

/** Get ZPA version info - Response */
export type ZoomApi$Get$Zpa$Versioninfo$Response = {
    /** List of firmware that can be upgraded. */
    firmware_versions?: {
        /** The device's manufacturer. */
        vendor?: string;
        /** The device's model name. */
        model?: string;
        /** The package version. */
        version?: string;
        /** The prompt information for this version. */
        warn_info?: string;
    }[];
    /** List of app versions that can be upgraded. */
    app_versions?: string[];
};

/** Get a meeting or webinar summary - Response */
export type ZoomApi$Getameetingsummary$Response = {
    /** The ID of the user who is set as the meeting host. */
    meeting_host_id?: string;
    /** The meeting host's email address. */
    meeting_host_email?: string;
    /** The unique meeting ID. 

Each meeting instance generates its own meeting UUID. After a meeting ends, a new UUID is generated for the next instance of the meeting.

 Use the [**List past meeting instances**](/docs/api-reference/zoom-api/methods#operation/pastMeetings) API to retrieve a list of UUIDs from past meeting instances. [Double encode](/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a `/` or contains `//` in it.
 */
    meeting_uuid?: string;
    /** [The meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-) 
The meeting's unique identifier in **long** format, represented as int64 data type in JSON. Also known as the meeting number. */
    meeting_id?: number;
    /** The meeting topic. */
    meeting_topic?: string;
    /** The meeting's start date and time. */
    meeting_start_time?: string;
    /** The meeting's end date and time. */
    meeting_end_time?: string;
    /** The summary's start date and time. */
    summary_start_time?: string;
    /** The summary's end date and time. */
    summary_end_time?: string;
    /** The date and time when the meeting summary was created. */
    summary_created_time?: string;
    /** The date and time when the meeting summary was last modified. */
    summary_last_modified_time?: string;
    /** The user ID of the user who last modified the meeting summary. */
    summary_last_modified_user_id?: string;
    /** The user email of the user who last modified the meeting summary. */
    summary_last_modified_user_email?: string;
    /** The summary title. */
    summary_title?: string;
    /** The summary overview. */
    summary_overview?: string;
    /** The summary content details. */
    summary_details?: {
        /** The summary label. */
        label?: string;
        /** The summary content. */
        summary?: string;
    }[];
    /** The next steps. */
    next_steps?: string[];
    /** The edited summary content. */
    edited_summary?: {
        /** The user edited summary overview. */
        summary_overview?: string;
        /** The user edited summary details. */
        summary_details?: string;
        /** The user edited next steps. */
        next_steps?: string[];
    };
    /** The complete meeting summary in Markdown format. This unified field is used for all summaries. For compatibility, the legacy fields `summary_overview`, `summary_details`, `next_steps`, and `edited_summary` are still returned, but are deprecated and will not be supported in the future. */
    summary_content?: string;
    /** The URL to view the full summary document in Zoom Docs. */
    summary_doc_url?: string;
};

/** Get history meeting and webinar list - Query parameters */
export type ZoomApi$Gethistorymeetingandwebinarlist$Params = Partial<{
    /** The start date in `yyyy-mm-dd` format. The date range defined by the `from` and `to` parameters should only be one month, as the report includes only one month worth of data at once. */
    from: string;
    /** The end date in `yyyy-mm-dd` format. */
    to: string;
    /** The type of date to query.
* `start_time` - Query by meeting's start time. 
* `end_time` - Query by meeting's end time. 

This value defaults to `start_time`. */
    date_type: 'start_time' | 'end_time';
    /** The meeting type to query. 
- `all` - rerturn meetings and webinars 
- `meeting` - only return meetings 
- `webinar` - only return webinars */
    meeting_type: 'meeting' | 'webinar' | 'all';
    /** Query meetings that have this type of report.
- `all` - all meetings
- `poll` - meetings with poll data 
- `survey` - meetings with survey data 
- `qa` - meetings with Q&A data 
- `resource` - meetings with resource link data 
- `reaction` - meetings with reaction data */
    report_type: 'all' | 'poll' | 'survey' | 'qa' | 'resource' | 'reaction';
    /** The keywords of meeting topic or meeting ID. */
    search_key: string;
    /** The number of records to be returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The group ID. To get a group ID, use the [**List groups**](/docs/api/rest/reference/user/methods/#operation/groups) API. 

 **Note:** The API response will only contain users who are members of the queried group ID. */
    group_id: string;
    /** The meeting features to query and return history meetings that use one or more of these features. To provide multiple values, separate them with commas, like `meeting_summary,meeting_questions` */
    meeting_feature:
        | 'screen_sharing'
        | 'video_on'
        | 'remote_control'
        | 'closed_caption'
        | 'language_interpretation'
        | 'telephone_usage'
        | 'in_meeting_chat'
        | 'poll'
        | 'join_by_room'
        | 'waiting_room'
        | 'live_transcription'
        | 'reaction'
        | 'zoom_apps'
        | 'annotation'
        | 'raise_hand'
        | 'virtual_background'
        | 'whiteboard'
        | 'immersive_scene'
        | 'avatar'
        | 'switch_to_mobile'
        | 'file_sharing'
        | 'meeting_summary'
        | 'meeting_questions'
        | 'record_to_computer'
        | 'record_to_cloud'
        | 'live_translation'
        | 'registration'
        | 'smart_recording'
        | 'multi_speaker'
        | 'meeting_wallpaper'
        | 'gen_ai_virtual_background'
        | 'multi_share'
        | 'document_collaboration'
        | 'portrait_lighting'
        | 'personalized_audio_isolation'
        | 'color_themes';
}>;

/** Get history meeting and webinar list - Response */
export type ZoomApi$Gethistorymeetingandwebinarlist$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** Array of history meetings. */
    history_meetings?: {
        /** The meeting unique universal identifier (UUID). Double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it. */
        meeting_uuid?: string;
        /** The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in &quot;**long**&quot; format(represented as int64 data type in JSON), also known as the meeting number. */
        meeting_id?: number;
        /** The meeting type, either Meeting or Webinar. */
        type?: 'Meeting' | 'Webinar';
        /** The host's display name. */
        host_display_name?: string;
        /** The host's email address. */
        host_email?: string;
        /** The meeting's start date and time. */
        start_time?: string;
        /** The meeting's end date and time. */
        end_time?: string;
        /** The meeting's topic. */
        topic?: string;
        /** The number of meeting participants. */
        participants?: number;
        /** The meeting's duration, in minutes. */
        duration?: number;
        /** The total duration of all participants, in minutes. */
        total_participant_minutes?: number;
        /** The host's department. */
        department?: string;
        /** The host's groups */
        group?: string[];
        /** Whether the meeting was created directly through Zoom or via an API request:
         * If the meeting was created via an OAuth app, this field returns the OAuth app's name.
         * If the meeting was created via JWT or the Zoom Web Portal, this returns the `Zoom` value. */
        source?: string;
        /** This value shows how many people viewed the webinar on their computer. It does not include panelists or attendees who only listened by phone. Viewers who joined the meeting multiple times or from multiple devices are counted only once. */
        unique_viewers?: number;
        /** The maximum number of online viewers at the same time during the webinar, excluding panelists. */
        max_concurrent_views?: number;
        /** The meeting's create date and time. */
        create_time?: string;
        /** The custom attributes that the host is assigned */
        custom_fields?: {
            /** The custom attribute's name. */
            key?: string;
            /** The custom attribute's value. */
            value?: string;
        }[];
        /** The tracking fields and values assigned to the meeting. */
        tracking_fields?: {
            /** The label of the tracking field. */
            field?: string;
            /** The value of the tracking field. */
            value?: string;
        }[];
        /** Features used in the meeting. */
        feature_used?: {
            /** Whether the screen was shared in the meeting. */
            screen_sharing?: boolean;
            /** Whether the video was on in the meeting. */
            video_on?: boolean;
            /** Whether to use remote control in the meeting. */
            remote_control?: boolean;
            /** Whether closed caption was enabled in the meeting. */
            closed_caption?: boolean;
            /** Whether breakout room was enabled in the meeting. */
            breakout_room?: boolean;
            /** Whether language translation was used in the meeting. */
            language_interpretation?: boolean;
            /** Whether anyone has joined the meeting by telephone. */
            telephone_usage?: boolean;
            /** Whether anyone in the meeting has sent a message in the meeting chat. */
            in_meeting_chat?: boolean;
            /** Whether the meeting has poll data. */
            poll?: boolean;
            /** Whether anyone has joined the meeting by Zoom Room. */
            join_by_room?: boolean;
            /** Whether to open the waiting room for the meeting. */
            waiting_room?: boolean;
            /** Whether live transcription was turned on. */
            live_transcription?: boolean;
            /** Whether anyone sent an emoticon. */
            reaction?: boolean;
            /** Whether the Zoom app was used in the meeting. */
            zoom_apps?: boolean;
            /** Whether annotation was used in the meeting. */
            annotation?: boolean;
            /** Whether anyone has raised hand in the meeting. */
            raise_hand?: boolean;
            /** Whether anyone used a virtual background in the meeting. */
            virtual_background?: boolean;
            /** Whether a whiteboard was used in the meeting. */
            whiteboard?: boolean;
            /** Whether immersive scene was enabled in then meeting. */
            immersive_scene?: boolean;
            /** Whether anyone used an avatar in the meeting. */
            avatar?: boolean;
            /** Whether anyone switched the meeting to their mobile phone. */
            switch_to_mobile?: boolean;
            /** Whether anyone sent files in the meeting chat. */
            file_sharing?: boolean;
            /** Whether the meeting summary was enabled. */
            meeting_summary?: boolean;
            /** Whether the meeting questions was enabled. */
            meeting_questions?: boolean;
            /** Whether to record the meeting to the local computer. */
            record_to_computer?: boolean;
            /** Whether to record the meeting to the cloud. */
            record_to_cloud?: boolean;
            /** Whether live translation was used in the meeting. */
            live_translation?: boolean;
            /** Whether registration was enabled for the meeting. */
            registration?: boolean;
            /** Whether smart recording was enabled for the meeting. */
            smart_recording?: boolean;
            /** Whether anyone used the multi-speaker view in the meeting. */
            multi_speaker?: boolean;
            /** Whether host set wallpaper in the meeting. */
            meeting_wallpaper?: boolean;
            /** Whether anyone used the GenAI virtual background in the meeting. */
            gen_ai_virtual_background?: boolean;
            /** Whether multi-share was used in the meeting */
            multi_share?: boolean;
            /** Whether anyone shared the document in the meeting. */
            document_collaboration?: boolean;
            /** Whether anyone used portrait lighting in the meeting. */
            portrait_lighting?: boolean;
            /** Whether anyone used personalized audio isolation in the meeting. */
            personalized_audio_isolation?: boolean;
            /** Whether anyone used color themes in the meeting. */
            color_themes?: boolean;
        };
    }[];
};

/** Get remote support report - Query parameters */
export type ZoomApi$Getremotesupportreport$Params = Partial<{
    /** The start date in `yyyy-MM-dd` format. The date range defined by the `from` and `to` parameters should only be one month, as the report includes only one month's worth of data at once. It is the date range for remote support to start. */
    from: string;
    /** The end date in `yyyy-MM-dd` format. */
    to: string;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The number of records to be returned within a single API call. */
    page_size: string;
}>;

/** Get remote support report - Response */
export type ZoomApi$Getremotesupportreport$Response = {
    /** Array of remote support logs. */
    remote_support_logs?: {
        /** The meeting's start time. */
        meeting_start_time?: string;
        /** The meeting's unique universal identifier (UUID). Double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it. */
        meeting_uuid?: string;
        /** The meeting number. */
        meeting_number?: number;
        /** The meeting's topic. */
        topic?: string;
        /** The meeting's host id. */
        meeting_host_id?: string;
        /** The supporter's user name. */
        supporter_name?: string;
        /** The supporter's user email. */
        supporter_email?: string;
        /** The supportee's user name. */
        supportee_name?: string;
        /** The supportee's user email. */
        supportee_email?: string;
        /** The time to request remote support. */
        request_time?: string;
        /** The waiting time for remote support from request to start, formatted in `hh:mm:ss`. */
        wait_time?: string;
        /** Remote support start time. */
        start_time?: string;
        /** Remote support end time */
        end_time?: string;
        /** The duration of remote support, formatted in `hh:mm:ss`. */
        duration?: string;
    }[];
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of records returned with a single API call. */
    page_size?: number;
};

/** Get ZDM group info - Query parameters */
export type ZoomApi$Getzdmgroupinfo$Params = Partial<{
    /** The total number of records returned from a single API call.
Default - 30.
Max -100. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period token is 15 minutes. */
    next_page_token: string;
}>;

/** Get ZDM group info - Response */
export type ZoomApi$Getzdmgroupinfo$Response = {
    /** All ZDM group information under current account. */
    groups?: {
        /** The ZDM group's unique ID. */
        zdm_group_id?: string;
        /** The ZDM group's name. */
        name?: string;
        /** The ZDM group's describe. */
        description?: string;
    }[];
    /** Use the next page token to paginate through a large set of results. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The total number of records returned from a single API call. */
    page_size?: number;
};

/** Use in-meeting controls - Request body */
export type ZoomApi$In$Meeting$Control$Request = {
    /** The method that you would like to control.
     * `recording.start` - Start the recording.
     * `recording.stop` - Stop the recording.
     * `recording.pause` - Pause the recording.
     * `recording.resume` - Resume a paused recording.
     * `participant.invite` - Invite a participant to the meeting.
     * `participant.invite.callout` - Invite a participant to the meeting through [call out (phone)](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062038).
     * `participant.invite.room_system_callout` - Invite a participant to the meeting through [call out (room system)](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065721).
     * `waiting_room.update` - Update the waiting room with a custom message.
     * `ai_companion.start` - Start the AI Companion.
     * `ai_companion.stop` - Stop the AI Companion.
     * `ai_companion.disable` - Disable the AI Companion. */
    method?:
        | 'recording.start'
        | 'recording.stop'
        | 'recording.pause'
        | 'recording.resume'
        | 'participant.invite'
        | 'participant.invite.callout'
        | 'participant.invite.room_system_callout'
        | 'waiting_room.update'
        | 'ai_companion.start'
        | 'ai_companion.stop'
        | 'ai_companion.disable';
    /** The in-meeting parameters. */
    params?: {
        /** The user's email address or the user ID, up to a maximum of 10 contacts. The account must be a part of the meeting host's account. */
        contacts?: {
            /** The user's email address. Use this value if you do not have the user's ID. 

If you pass the `id` value, the API ignores this query parameter. */
            email?: string;
            /** The user's ID. */
            id?: string;
        }[];
        /** The user's name to display in the meeting. Use this field if you pass the `participant.invite.callout` value for the `method` field. */
        invitee_name?: string;
        /** The user's phone number. Use this field if you pass the `participant.invite.callout` value for the `method` field. As a best practice, ensure this includes a country code and area code.

If you are dialing a phone number that includes an extension, type a hyphen '-' after the phone number and enter the extension. For example, 6032331333-156 dials the extension 156. */
        phone_number?: string;
        /** Information about the `participant.invite.callout` settings. */
        invite_options?: {
            /** Whether to require a greeting before being connected. Use this field if you pass the `participant.invite.callout` value for the `method` field. */
            require_greeting?: boolean;
            /** Whether to require pressing 1 before being connected. Use this field if you pass the `participant.invite.callout` value for the `method` field. */
            require_pressing_one?: boolean;
        };
        /** The type of call out. Use a value of `h323` or `sip`. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field. */
        call_type?: string;
        /** The user's device IP address or URI. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field. */
        device_ip?: string;
        /** Enable customers to leverage services that require customization of the FROM header to identify the caller. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field and the `h323` value for the `call_type` field. */
        h323_headers?: {
            /** Custom name that will be used within the h323 Header. */
            from_display_name?: string;
            /** Custom remote name that will be used within the meeting. */
            to_display_name?: string;
        };
        /** Enable customers to leverage services that require customization of the FROM header to identify the caller. Use this field if you pass the `participant.invite.room_system_callout` value for the `method` field and the `sip` value for the `call_type` field. */
        sip_headers?: {
            /** Custom name that will be used within the SIP Header. */
            from_display_name?: string;
            /** Custom remote name that will be used within the meeting. */
            to_display_name?: string;
            /** Custom URI that will be used within the SIP Header. The URI must start with 'sip:' or 'sips:' as a valid URI based on parameters defined by the platform. */
            from_uri?: string;
            /** Ability to add 1 to 10 custom headers, each of which has a maximum length of 256 bytes to comply with SIP standards.  Custom headers would leverage header names starting with 'X-' per SIP guidelines. */
            additional_headers?: {
                /** Additional custom SIP header's key. */
                key?: string;
                /** Additional custom SIP header's value. */
                value?: string;
            }[];
        };
        /** The title displayed in the waiting room. Use this field if you pass the `waiting_room.update` value for the `method` field. */
        waiting_room_title?: string;
        /** The description shown in the waiting room. Use this field if you pass the `waiting_room.update` value for the `method` field. */
        waiting_room_description?: string;
        /** Which AI Companion mode to start or stop. Use this field if you pass the `ai_companion.start` or `ai_companion.stop` value for the `method` field.
* `questions` — The AI Companion for answering questions.
* `summary` — The AI Companion for generating meeting summaries.
* `all` — Both modes.

If this field is not provided, `all` is used by default. */
        ai_companion_mode?: 'questions' | 'summary' | 'all';
        /** Whether to delete all meeting assets - such as transcripts and summaries - when stopping the AI Companion. Use this field only if you pass the `ai_companion.stop` value for the `method` field **and** the `ai_companion_mode` field is set to `all`. */
        delete_meeting_assets?: boolean;
    };
};

/** List archived files - Query parameters */
export type ZoomApi$List$Archived$Files$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The query start date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `to` query parameter value cannot exceed seven days. */
    from: string;
    /** The query end date, in `yyyy-MM-dd'T'HH:mm:ssZ` format. This value and the `from` query parameter value cannot exceed seven days. */
    to: string;
    /** The type of query date.
* `meeting_start_time` 
* `archive_complete_time` 

 This value defaults to `meeting_start_time`. */
    query_date_type: 'meeting_start_time' | 'archive_complete_time';
    /** Deprecated. Please use 'group_ids' for querying. */
    group_id: string;
    /** The group IDs. To get a group ID, use the [List groups](/docs/api/rest/reference/scim-api/methods/#operation/groupSCIM2List) API.
(The maximum number of supported groups for filtering is 7.) */
    group_ids: string;
}>;

/** List archived files - Response */
export type ZoomApi$List$Archived$Files$Response = {
    /** The queried start date. */
    from?: string;
    /** Information about the meeting or webinar. */
    meetings?: {
        /** The user's account name. */
        account_name: string;
        /** Information about the archive files. */
        archive_files: {
            /** The URL to download the the archive file. 

 **OAuth apps** 

 If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](/docs/integrations/oauth/) to download the file. For example, `https://{{base-domain}}/rec/archive/download/xxx--header 'Authorization: Bearer {{OAuth-access-token}}'` 

 **Note:** This field does **not** return for [Zoom on-premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). Instead, this API will return the `file_path` field. */
            download_url: string;
            /** The archived file's extension. */
            file_extension: string;
            /** The file path to the on-premise account archive file. 

 **Note:** The API only returns this field for [Zoom on-premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field. */
            file_path?: string;
            /** The archived file's size, in bytes. */
            file_size: number;
            /** The archive file's type.
             * `MP4` - Video file.
             * `M4A` - Audio-only file.
             * `CHAT` - A TXT file containing in-meeting chat messages.
             * `CC` - A file containing the closed captions of the recording, in VTT file format.
             *  `CHAT_MESSAGE` - A JSON file encoded in base64 format containing chat messages. The file also includes waiting room chats, deleted messages, meeting emojis and non-verbal feedback.
             *  `TRANSCRIPT` - A JSON file include audio transcript wording.
             * `SUB_GROUP_MEMBER_LOG` - A json file containing records of members entering and leaving the subgroup.
             * `AIC_COVERSATION` - A json file include internal user archive aic content. */
            file_type:
                | 'MP4'
                | 'M4A'
                | 'CHAT'
                | 'CC'
                | 'CHAT_MESSAGE'
                | 'TRANSCRIPT'
                | 'SUB_GROUP_MEMBER_LOG'
                | 'AIC_COVERSATION';
            /** The archive file's unique ID. */
            id: string;
            /** Whether the archive file is an individual recording file.
             * `true` - An individual recording file.
             * `false` - An entire meeting file. */
            individual: boolean;
            /** The individual recording file's participant email address. This value is returned when the `individual` value is `true`. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](/docs/api/using-zoom-apis/#email-address-display-rules) for details. */
            participant_email?: string;
            /** The join time for the generated recording file. If this value is returned when the individual value is `true`, it is the recording file's participant join time. When the individual value is `false`, it returns the join time for the archiving gateway. */
            participant_join_time: string;
            /** The leave time for the generated recording file. If this value is returned when the individual value is `true`, it is the recording file's participant leave time. When the individual value is `false`, it returns the leave time for the archiving gateway. */
            participant_leave_time: string;
            /** The archive file's recording type. 
* `shared_screen_with_speaker_view` 
* `audio_only` 
* `chat_file` 
* `closed_caption` 
* `chat_message` 
* `audio_transcript` 
* `aic_conversation` 

 For more information, read our [Managing and sharing cloud recordings](https://support.zoom.us/hc/en-us/articles/205347605-Managing-and-sharing-cloud-recordings#h_9898497b-e736-4980-a749-d55608f10773) documentation. */
            recording_type:
                | 'shared_screen_with_speaker_view'
                | 'audio_only'
                | 'chat_file'
                | 'closed_caption'
                | 'chat_message'
                | 'audio_transcript'
                | 'aic_conversation';
            /** The archived file's processing status.
             * `completed` - The processing of the file is complete.
             * `processing` - The file is processing.
             * `failed` - The processing of the file failed. */
            status: 'completed' | 'processing' | 'failed';
            /** The archived file's encryption fingerprint, using the SHA256 hash algorithm. */
            encryption_fingerprint: string;
            /** The number of `TXT` or `JSON` file messages. This field returns only when the `file_extension` is `JSON` or `TXT`. */
            number_of_messages?: number;
            /** The region where the file is stored. This field returns only `Enable Distributed Compliance Archiving` op feature is enabled. */
            storage_location?:
                | 'US'
                | 'AU'
                | 'BR'
                | 'CA'
                | 'EU'
                | 'IN'
                | 'JP'
                | 'SG'
                | 'CH';
            /** Whether to auto delete the archived file.

**Prerequisites:** 

Enable the "Tag Archiving Files for Deletion" feature in OP. Contact [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003) to open. */
            auto_delete?: boolean;
        }[];
        /** The meeting or webinar's archive completion time. */
        complete_time: Record<string, any> | '';
        /** The meeting or webinar's scheduled duration. */
        duration: number;
        /** The meeting or webinar's duration, in seconds. */
        duration_in_second: number;
        /** The ID of the user set as the host of the archived meeting or webinar. */
        host_id: string;
        /** The meeting or webinar ID, either `meetingId` or `webinarId`. */
        id: number;
        /** Whether the room is a [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms). */
        is_breakout_room: boolean;
        /** Whether the meeting or webinar is internal or external. 
* `internal` - An internal meeting or webinar. 
* `external` - An external meeting or webinar. 

 The `id`, `host_id`, and `topic` PII (Personal Identifiable Information) values in this response are removed when this value is `external`. */
        meeting_type: 'internal' | 'external';
        /** The parent meeting's universally unique ID (UUID). Each meeting or webinar instance generates a UUID. If the `is_breakout_room` value is `true`, the API returns this value. */
        parent_meeting_id?: string;
        /** The number of archived files returned in the API call response. */
        recording_count: number;
        /** The meeting or webinar's start time. */
        start_time: string;
        /** The meeting or webinar's [timezone](/docs/api/references/abbreviations/#timezones). */
        timezone: string;
        /** The meeting or webinar topic. */
        topic: string;
        /** The total size of the archive file, in bytes. */
        total_size: number;
        /** The type of archived meeting or webinar. 

 Meeting recordings use these archive types. 
* `1` - Instant meeting. 
* `2` - Scheduled meeting. 
* `3` - A recurring meeting with no fixed time. 
* `4` - A meeting created via PMI (Personal Meeting ID). 
* `7` - A [Personal Audio Conference](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) (PAC). 
* `8` - Recurring meeting with a fixed time. 

 Webinar recordings use these archive types. 
* `5` - A webinar. 
* `6` - A recurring webinar without a fixed time. 
* `9` - A recurring webinar with a fixed time. 

 If the recording is **not** from a meeting or webinar: 

* `100` - A [breakout room](https://support.zoom.us/hc/en-us/articles/115005769646-Participating-in-breakout-rooms). */
        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 100;
        /** The recorded meeting or webinar instance's universally unique identifier (UUID). Each meeting or webinar instance generates a UUID. */
        uuid: string;
        /** The archive's processing status.
         * `completed` - The archive's processing is complete.
         * `processing` - The archive is processing. */
        status: 'completed' | 'processing';
        /** Primary group IDs of participants who belong to your account. Each group ID is separated by a comma. */
        group_id?: string;
        /** Information about the physical files. */
        physical_files?: {
            /** The physical file's unique ID. */
            file_id?: string;
            /** The physical file's name. */
            file_name?: string;
            /** The physical file's size, in bytes. */
            file_size?: number;
            /** The URL to download the the archive file. 

 **OAuth apps** 

 If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](/docs/integrations/oauth/) to download the file. 

 Example: 

 `https://{{base-domain}}/rec/archive/attached/download/xxx--header 'Authorization: Bearer {{OAuth-access-token}}'`  */
            download_url?: string;
        }[];
    }[];
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes.

 **Note:** if you use `next_page_token` as a parameter, your other request parameters should be changeless to make sure that the large result set is what you want. For example, if your `to` parameter is for a future time, Zoom resets this value to the current time and returns this value in the response body, along with the `next_page_token` value. Use these same `to` and `next_page_token` values in requests for the remaining results set; otherwise you will get an invalid token error. */
    next_page_token?: string;
    /** The number of records returned within a single API call. */
    page_size?: number;
    /** The queried end date. */
    to?: string;
    /** The total number of returned meeting records. */
    total_records?: number;
};

/** List devices - Query parameters */
export type ZoomApi$List$Devices$Params = Partial<{
    /** Filter devices by name or serial number. */
    search_text: string;
    /** Filter devices by platform operating system. */
    platform_os: 'win' | 'mac' | 'ipad' | 'iphone' | 'android' | 'linux';
    /** Filter devices by enrollment of ZDM (Zoom Device Management). */
    is_enrolled_in_zdm: boolean;
    /** Filter devices by device type.  
  Device Type:  
 `-1` - All Zoom Room device(0,1,2,3,4,6).  
 `0` - Zoom Rooms Computer.  
 `1` - Zoom Rooms Controller.  
 `2` - Zoom Rooms Scheduling Display.  
 `3` - Zoom Rooms Control System.  
 `4` -  Zoom Rooms Whiteboard.  
 `5` - Zoom Phone Appliance.  
 `6` - Zoom Rooms Computer (with Controller). */
    device_type: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** Filter devices by vendor. */
    device_vendor: string;
    /** Filter devices by model. */
    device_model: string;
    /** Filter devices by status.   
  Device Status:  
 `0` - offline.  
 `1` - online.  
 `-1` - unlink */
    device_status: -1 | 0 | 1;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** List devices - Response */
export type ZoomApi$List$Devices$Response = {
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of records returned within a single API call. */
    page_size?: number;
    devices?: {
        /** Unique identifier of the device. */
        device_id?: string;
        /** The name of the device. */
        device_name?: string;
        /** The mac address of the device. */
        mac_address?: string;
        /** The device's serial number. */
        serial_number?: string;
        /** The device's manufacturer. */
        vendor?: string;
        /** The device's model. */
        model?: string;
        /** The device's platform. */
        platform_os?: string;
        /** App version of Zoom Rooms. */
        app_version?: string;
        /** The name of the tag. */
        tag?: string;
        /** Whether the device enrolled in ZDM (Zoom Device Management). */
        enrolled_in_zdm?: boolean;
        /** Whether the device connected to ZDM (Zoom Device Management). */
        connected_to_zdm?: boolean;
        /** id of the Zoom Room. */
        room_id?: string;
        /** Name of the Zoom Room. */
        room_name?: string;
        /** Filter devices by device type.  
  Device Type:  
 `-1` - All Zoom Room device(0,1,2,3,4,6).  
 `0` - Zoom Rooms Computer.  
 `1` - Zoom Rooms Controller.  
 `2` - Zoom Rooms Scheduling Display.  
 `3` - Zoom Rooms Control System.  
 `4` -  Zoom Rooms Whiteboard.  
 `5` - Zoom Phone Appliance.  
 `6` - Zoom Rooms Computer (with Controller). */
        device_type?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        /** The version of the SDK. */
        skd_version?: string;
        /** Filter devices by status.   
  Device Status:  
 `0` - offline.  
 `1` - online.  
 `-1` - unlink */
        device_status?: -1 | 0 | 1;
        /** The time when device was online last time. */
        last_online?: string;
        /** The owner of the phone device */
        user_email?: string;
    }[];
};

/** List meeting templates - Response */
export type ZoomApi$List$Meeting$Templates$Response = {
    templates?: {
        /** The template ID. */
        id?: string;
        /** The template name. */
        name?: string;
        /** The template type:   
 
`1`: Meeting template   
 
`2`: Admin meeting template */
        type?: number;
    }[];
    /** Total records found for this request. */
    total_records?: number;
};

/** List past meeting's poll results - Response */
export type ZoomApi$List$Past$Meeting$Polls$Response = {
    /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in **long** format(represented as int64 data type in JSON), also known as the meeting number. */
    id?: number;
    questions?: {
        /** Email address of the user who submitted answers to the poll. If the user is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        email?: string;
        /** Name of the user who submitted answers to the poll. If `anonymous` option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be `Anonymous Attendee`. */
        name?: string;
        question_details?: {
            /** Answer submitted by the user. */
            answer?: string;
            /** Date and time at which the answer to the poll was submitted. */
            date_time?: string;
            /** Unique identifier of the poll. */
            polling_id?: string;
            /** Question asked during the poll. */
            question?: string;
        }[];
    }[];
    /** The start time of the meeting. */
    start_time?: string;
    /** Meeting UUID. */
    uuid?: string;
};

/** List past meetings' Q&A - Response */
export type ZoomApi$List$Past$Meeting$Q$A$Response = {
    /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in **long** format, represented as int64 data type in JSON, also known as the meeting number. */
    id?: number;
    questions?: {
        /** The user's email address. If the user is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        email?: string;
        /** The user's name. If `anonymous` option is enabled for the Q&amp;A, the participant's information is be kept anonymous and the value of `name` field is `Anonymous Attendee`. */
        name?: string;
        question_details?: {
            /** An answer submitted for the question. The value is 'live answered' if this is a live answer. */
            answer?: string;
            /** A question asked during the Q&amp;A. */
            question?: string;
        }[];
    }[];
    /** The meeting's start time. */
    start_time?: string;
    /** Meeting UUID. */
    uuid?: string;
};

/** List past webinar poll results - Response */
export type ZoomApi$List$Past$Webinar$Poll$Results$Response = {
    /** Webinar ID in **long** format, represented as int64 data type in JSON, also known as the webinar number. */
    id?: number;
    questions?: {
        /** Email address of the user who submitted answers to the poll. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        email?: string;
        /** Name of the user who submitted answers to the poll. If the `anonymous` option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be `Anonymous Attendee`. */
        name?: string;
        question_details?: {
            /** Answer submitted by the user. */
            answer?: string;
            /** Date and time when the answer to the poll was submitted. */
            date_time?: string;
            /** Unique identifier of the poll. */
            polling_id?: string;
            /** Question asked during the poll. */
            question?: string;
        }[];
    }[];
    /** The webinar's start time. */
    start_time?: string;
    /** Webinar UUID. */
    uuid?: string;
};

/** List Q&As of a past webinar - Response */
export type ZoomApi$List$Past$Webinar$Q$A$Response = {
    /** Webinar ID in **long** format, represented as int64 data type in JSON, also known as the webinar number. */
    id?: number;
    questions?: {
        /** Email address of the user. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        email?: string;
        /** Name of the user. If `anonymous` option is enabled for the Q&amp;A, the participant's information will be kept anonymous and the value of `name` field will be `Anonymous Attendee`. */
        name?: string;
        question_details?: {
            /** Answer submitted for the question. The value will be 'live answered' if this is a live answer. */
            answer?: string;
            /** Question asked during the Q&amp;A. */
            question?: string;
        }[];
    }[];
    /** The webinar's start time. */
    start_time?: string;
    /** Webinar UUID. */
    uuid?: string;
};

/** List SIP phones - Query parameters */
export type ZoomApi$List$S$I$P$Phone$Phones$Params = Partial<{
    /** A user's user name or email address. If this parameter is provided, only the SIP phone system integration enabled for that specific user will be returned. Otherwise, all SIP phones on an account will be returned. */
    search_key: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. This tokan's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** List SIP phones - Response */
export type ZoomApi$List$S$I$P$Phone$Phones$Response = {
    next_page_token?: string;
    /** The number of records returned within a single API call. */
    page_size?: number;
    /** SIP phones object. */
    phones?: {
        /** The authorization name of the user that is registered for SIP phone. */
        authorization_name?: string;
        /** The name or IP address of your provider's SIP domain. */
        domain?: string;
        /** The SIP phone ID. */
        phone_id?: string;
        /** The password generated for the user in the SIP account.
         */
        password?: string;
        /** The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server.  */
        registration_expire_time?: number;
        /** The email address of the user to associate with the SIP Phone. Can add `.pc`, `.mobile`, `.pad` at the end of the email (for example, `user@example.com.pc`) to add accounts for different platforms for the same user. */
        user_email?: string;
        /** The phone number associated with the user in the SIP account.  */
        user_name?: string;
        /** The number to dial for checking voicemail. */
        voice_mail?: string;
        /** The displayed phone number associated with the user can be either in extension format or E.164 format. You can specify the displayed number when the dialable number differs from the SIP username. */
        display_number?: string;
        /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
        server?: {
            /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
            proxy_server?: string;
            /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
            register_server?: string;
            /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
            transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
        };
        /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
        server_2?: {
            /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
            proxy_server?: string;
            /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
            register_server?: string;
            /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
            transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
        };
        /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
        server_3?: {
            /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
            proxy_server?: string;
            /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
            register_server?: string;
            /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
            transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
        };
    }[];
};

/** List upcoming meetings - Response */
export type ZoomApi$List$Upcoming$Meeting$Response = {
    /** The total number of all records available across all pages. */
    total_records?: number;
    /** List of upcoming meeting objects. */
    meetings?: {
        /** The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-) - a unique identifier of the meeting in **long** format, represented as int64 data type in JSON. Also known as the meeting number. */
        id?: number;
        /** The meeting topic. */
        topic?: string;
        /** Meeting types.
`1` - Instant meeting.
`2` - Scheduled meeting.
`3` - Recurring meeting with no fixed time.
`8` - Recurring meeting with a fixed time. */
        type?: 1 | 2 | 3 | 8;
        /** The meeting's start time. */
        start_time?: string;
        /** Meeting duration. */
        duration?: number;
        /** The timezone to format the meeting start time. */
        timezone?: string;
        /** The meeting creation time. */
        created_at?: string;
        /** The URL that participants can use to join a meeting. */
        join_url?: string;
        /** The meeting passcode. This passcode may only contain characters `[a-z A-Z 0-9 @ - _ * !]`. */
        passcode?: string;
        /** Use a [personal meeting ID (PMI)](/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time. */
        use_pmi?: boolean;
        /** Whether the current user is the host of the meeting. */
        is_host?: boolean;
        /** Whether the meeting is scheduled as an all-day event. */
        is_all_day?: boolean;
    }[];
};

/** List webinar participants - Query parameters */
export type ZoomApi$List$Webinar$Participants$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** List webinar participants - Response */
export type ZoomApi$List$Webinar$Participants$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for this request. */
    page_count?: number;
    /** The total number of records returned from a single API call. */
    page_size?: number;
    /** Array of webinar participant objects. */
    participants?: {
        /** The participant's unique identifier. */
        id?: string;
        /** The participant's name. */
        name?: string;
        /** The participant's ID. This ID is assigned to the participant upon joining the webinar and is only valid for that webinar. */
        user_id?: string;
        /** The participant's unique registrant ID. This field only returns if you pass the `registrant_id` value for the `include_fields` query parameter. 

This field does not return if the `type` query parameter is the `live` value. */
        registrant_id?: string;
        /** Email address of the participant. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        user_email?: string;
        /** The participant's join time. */
        join_time?: string;
        /** The participant's leave time. */
        leave_time?: string;
        /** Participant duration, in seconds, calculated by subtracting the `leave_time` from the `join_time` for the `user_id`. If the participant leaves and rejoins the same meeting, they will be assigned a different `user_id` and Zoom displays their new duration in a separate object. Note that because of this, the duration may not reflect the total time the user was in the meeting. */
        duration?: number;
        /** Whether failover occurred during the webinar. */
        failover?: boolean;
        /** The participant's status.
         * `in_meeting` - In a meeting.
         * `in_waiting_room` - In a waiting room. */
        status?: 'in_meeting' | 'in_waiting_room';
        /** Whether the webinar participant is an internal user. */
        internal_user?: boolean;
    }[];
    /** The total number of records available across all pages. */
    total_records?: number;
};

/** List webinar templates - Response */
export type ZoomApi$List$Webinar$Templates$Response = {
    /** Information about the webinar templates. */
    templates?: {
        /** The webinar template's ID. */
        id?: string;
        /** The webinar template's name. */
        name?: string;
        /** The webinar template type.  `1`: Webinar template    `2`: Admin webinar template */
        type?: number;
    }[];
    /** The total number of records returned. */
    total_records?: number;
};

/** List an account's meeting or webinar summaries - Query parameters */
export type ZoomApi$Listmeetingsummaries$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through a large set of results. The next page token returns whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The start date, in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format. The time field used for filtering is specified by `time_filter_field`. */
    from: string;
    /** The end date, in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format. The time field used for filtering is specified by `time_filter_field`. */
    to: string;
    /** Which summary time field to use to filter results by the `from` and `to` parameters. */
    time_filter_field: 'summary_start_time' | 'summary_created_time';
}>;

/** List an account's meeting or webinar summaries - Response */
export type ZoomApi$Listmeetingsummaries$Response = {
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** Use the next page token to paginate through a large set of results. The next page token returns whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The start date, in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format, used to retrieve the meeting summaries' creation date range. */
    from?: string;
    /** The end date, in `yyyy-MM-dd'T'HH:mm:ss'Z'` UTC format, used to retrieve the meeting summaries' creation date range. */
    to?: string;
    /** List of meeting summary objects. */
    summaries?: {
        /** The ID of the user who is set as the meeting host. */
        meeting_host_id?: string;
        /** The meeting host's email address. */
        meeting_host_email?: string;
        /** Unique meeting ID. Each meeting instance generates its own meeting UUID. After a meeting ends, a new UUID is generated for the next instance of the meeting. Retrieve a list of UUIDs from past meeting instances using the [**List past meeting instances**](/docs/api-reference/zoom-api/methods#operation/pastMeetings) API. [Double encode](/docs/api/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a `/` or contains `//` in it.
         */
        meeting_uuid?: string;
        /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-) - the meeting's unique identifier in **long** format, represented as int64 data type in JSON, also known as the meeting number. */
        meeting_id?: number;
        /** Meeting topic. */
        meeting_topic?: string;
        /** The meeting's start date and time. */
        meeting_start_time?: string;
        /** The meeting's end date and time. */
        meeting_end_time?: string;
        /** The summary's start date and time. */
        summary_start_time?: string;
        /** The summary's end date and time. */
        summary_end_time?: string;
        /** The date and time when the meeting summary was created. */
        summary_created_time?: string;
        /** The date and time when the meeting summary was last modified. */
        summary_last_modified_time?: string;
    }[];
};

/** Add a meeting app - Response */
export type ZoomApi$Meeting$App$Add$Response = {
    /** The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in **long** format(represented as int64 data type in JSON), also known as the meeting number. */
    id?: number;
    /** For scheduled meetings only. Meeting start date-time in UTC/GMT, such as `2020-03-31T12:02:00Z`. */
    start_time?: string;
    /** The app's ID. */
    app_id?: string;
};

/** Create a meeting - Request body */
export type ZoomApi$Meeting$Create$Request = {
    /** The meeting's agenda. This value has a maximum length of 2,000 characters. */
    agenda?: string;
    /** Whether to automatically generate a passcode for the meeting when no passcode is provided and the user's **Require a passcode when scheduling new meetings** setting is enabled. Defaults to `true`. When set to `false`, meetings will only have a passcode if one is explicitly provided. */
    default_password?: boolean;
    /** The meeting's scheduled duration, in minutes. This field is used for `2` scheduled meetings and `8` recurring meetings with a fixed time. The value must be between 1 and 1440 minutes, which is equivalent to 24 hours. */
    duration?: number;
    /** The meeting passcode. By default, it can be up to 10 characters in length and may contain alphanumeric characters as well as special characters such as !, @, #, etc.

**Note**:
- If the account owner or administrator has configured [Passcode Requirement](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063160#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode **must** meet those requirements. You can retrieve the requirements using the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API or the [**Get account settings**](/docs/api/accounts/#tag/accounts/GET/accounts/{accountId}/settings) API.
- If the **Require a passcode when scheduling new meetings** user setting is enabled and `default_password` is not explicitly set to `false`, a passcode will be automatically generated when one is not provided.
- If the **Require a passcode when scheduling new meetings** setting is enabled and [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, a passcode will be automatically generated when one is not provided. */
    password?: string;
    /** Whether to create a prescheduled meeting via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` scheduled meetings and `3` recurring meetings with no fixed time.
     * `true` - Create a prescheduled meeting.
     * `false` - Create a regular meeting. */
    pre_schedule?: boolean;
    /** The recurrence object. Use this object only for a meeting with type `8`, a recurring meeting with a fixed time.  */
    recurrence?: {
        /** This field selects the final date when the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Cannot be used with `end_times`. */
        end_date_time?: string;
        /** This field selects how many times the meeting should recur before it is canceled. If `end_times` is set to 0, it means there is no end time. The maximum number of recurring is 60. Cannot be used with `end_date_time`. */
        end_times?: number;
        /** This field is **only** for scheduling a **recurring meeting of type `3`**. It states the day in a month when the meeting should recur. The value range is from `1` to `31`.

For the meeting to recur on 23rd of each month, provide `23` as this field's value and `1` as the `repeat_interval` field's value. To have the meeting recur every three months on 23rd of the month, change the `repeat_interval` field value to `3`. */
        monthly_day?: number;
        /** This field is **only if** for scheduling a **recurring meeting of type `3`**.  It states the week of the month when the meeting should recur. If you use this field, you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** This field is **only if** for scheduling a **recurring meeting of type `3`**. It states a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field. 

  
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** This field defines the interval when the meeting should recur. For instance, to schedule a meeting that recurs every two months, set this field's value as `2` and the value of the `type` parameter as `3`. 

For a daily meeting, the maximum number of recurrences is `99` days. For a weekly meeting, the maximum is `50` weeks. For a monthly meeting, the maximum is `10` months.

 */
        repeat_interval?: number;
        /** The recurrence meeting types.
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** This field is **required** if you're scheduling a recurring meeting of type `2`. It states the days of the week when the meeting should repeat. 

This field's value could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `1` as this field's value.  

**Note:** To set the meeting to occur on multiple days of a week, provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays, provide `1,3` as this field's value.

   
 `1` - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    /** The email address or user ID of the user to schedule a meeting for. */
    schedule_for?: string;
    /** Information about the meeting's settings. */
    settings?: {
        /** This field adds additional meeting [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](/docs/api/references/abbreviations/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).

For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing.

To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field. */
        additional_data_center_regions?: string[];
        /** Whether to allow attendees to join a meeting from multiple devices. This setting is only applied to meetings with registration enabled. */
        allow_multiple_devices?: boolean;
        /** A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs. */
        alternative_hosts?: string;
        /** Whether to send email notifications to alternative hosts. This value defaults to `true`. */
        alternative_hosts_email_notification?: boolean;
        /** Enable meeting registration approval.
* `0` - Automatically approve registration.
* `1` - Manually approve registration.
* `2` - No registration required.

This value defaults to `2`. */
        approval_type?: 0 | 1 | 2;
        /** The list of approved or blocked users from specific countries or regions who can join the meeting. */
        approved_or_denied_countries_or_regions?: {
            /** The list of approved countries or regions. */
            approved_list?: string[];
            /** The list of blocked countries or regions. */
            denied_list?: string[];
            /** Whether to enable the [**Approve or block entry for users from specific countries/regions**](https://support.zoom.us/hc/en-us/articles/360060086231-Approve-or-block-entry-for-users-from-specific-countries-regions) setting. */
            enable?: boolean;
            /** Whether to allow or block users from specific countries or regions.
             * `approve` - Allow users from specific countries or regions to join the meeting. If you select this setting, include the approved countries or regions in the `approved_list` field.
             * `deny` - Block users from specific countries or regions from joining the meeting. If you select this setting, include the blocked countries or regions in the `denied_list` field. */
            method?: 'approve' | 'deny';
        };
        /** How participants join the audio portion of the meeting.
         * `both` - Both telephony and VoIP.
         * `telephony` - Telephony only.
         * `voip` - VoIP only.
         * `thirdParty` - Third party audio conference. */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference information. */
        audio_conference_info?: string;
        /** The meeting's authenticated domains. Only Zoom users whose email address contains an authenticated domain can join the meeting. Comma-separate multiple domains or use a wildcard for listing domains. */
        authentication_domains?: string;
        /** A list of participants who can bypass meeting authentication. These participants will receive a unique meeting invite. */
        authentication_exception?: {
            /** The participant's email address. */
            email?: string;
            /** The participant's name. */
            name?: string;
        }[];
        /** If the `meeting_authentication` value is `true`, the type of authentication required for users to join a meeting.

To get this value, use the `authentication_options` array's `id` value in the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API response. */
        authentication_option?: string;
        /** The automatic recording settings. 
* `local` - Record the meeting locally. 
* `cloud` - Record the meeting to the cloud. 
* `none` - Auto-recording disabled.

This value defaults to `none`. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Automatically add meeting recordings to a video channel in video management. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        auto_add_recording_to_video_management?: {
            /** Whether to automatically add the meeting recording to video management. */
            enable: boolean;
            /** List of video management channels where the meeting recording will be added. */
            channels?: {
                /** The unique ID of a video management channel. */
                channel_id: string;
                /** The name of the video management channel. */
                name?: string;
            }[];
        };
        /** The [pre-assigned breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms) settings. */
        breakout_room?: {
            /** Whether to enable the [**Breakout Room pre-assign**](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms) option. */
            enable?: boolean;
            /** Information about the breakout rooms. */
            rooms?: {
                /** The breakout room's name. */
                name?: string;
                /** The email addresses of the participants to assign to the breakout room. */
                participants?: string[];
            }[];
        };
        /** The type of calendar integration used to schedule the meeting.
* `1` - [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in) 
* `2` - [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)

Works with the `private_meeting` field to determine whether to share details of meetings or not. */
        calendar_type?: 1 | 2;
        /** Whether to close registration after the event date. This value defaults to `false`. */
        close_registration?: boolean;
        /** Whether to host the meeting in China (CN). This value defaults to `false`. */
        cn_meeting?: boolean;
        /** The contact email address for meeting registration. */
        contact_email?: string;
        /** The contact name for meeting registration. */
        contact_name?: string;
        /** Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`. */
        email_notification?: boolean;
        /** The type of [end-to-end (E2EE) encryption](https://support.zoom.us/hc/en-us/articles/360048660871) to use for the meeting.
         * `enhanced_encryption` - Enhanced encryption. Encryption is stored in the cloud when you enable this option.
         * `e2ee` - End-to-end encryption. The encryption key is stored on your local device and **cannot** be obtained by anyone else. When you use E2EE encryption, [certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording or phone and SIP/H.323 dial-in, are **disabled**. */
        encryption_type?: 'enhanced_encryption' | 'e2ee';
        /** Whether to enable the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) when the meeting starts. */
        focus_mode?: boolean;
        /** A list of available global dial-in countries. */
        global_dial_in_countries?: string[];
        /** Whether to start meetings with the host video on. */
        host_video?: boolean;
        /** Whether to host the meeting in India (IN). This value defaults to `false`. */
        in_meeting?: boolean;
        /** If the value of the `join_before_host` field is `true`, this field indicates the time limits when a participant can join a meeting before the meeting's host.

* `0` - Allow the participant to join the meeting at anytime.
* `5` - Allow the participant to join 5 minutes before the meeting's start time.
* `10` - Allow the participant to join 10 minutes before the meeting's start time.
* `15` - Allow the participant to join 15 minutes before the meeting's start time. */
        jbh_time?: 0 | 5 | 10 | 15;
        /** Whether participants can join the meeting before its host. This field is only used for scheduled meetings (`2`) or recurring meetings (`3` and `8`). This value defaults to `false`.

If the [**Waiting Room** feature](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) is enabled, this setting is **disabled**. */
        join_before_host?: boolean;
        /** [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for meeting. */
        question_and_answer?: {
            /** * `true` - Enable [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for meeting.

* `false` - Disable Q&amp;A for meeting. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** * `true` - Allow participants to submit questions.

* `false` - Don't allow participants to submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists.

* `false` - Do not allow anonymous questions. Not supported for simulive meeting. */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want to allow attendees to be able to view only answered questions or all questions.

* `answered` - Attendees are able to view answered questions only.

*  `all` - Attendees are able to view all questions submitted in the Q&amp;A. */
            question_visibility?: 'answered' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can not answer questions or leave a comment in the question thread */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can select the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can't select the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
        };
        /** The meeting's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details.

**Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the meeting. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the meeting's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The meeting's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the meeting. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the meeting's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/api-reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** If true, only [authenticated](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) users can join the meeting. */
        meeting_authentication?: boolean;
        /** A list of the meeting's invitees. */
        meeting_invitees?: {
            /** The invitee's email address. */
            email?: string;
        }[];
        /** Whether to mute participants upon entry. */
        mute_upon_entry?: boolean;
        /** Whether to start meetings with the participant video on. */
        participant_video?: boolean;
        /** Whether to set the meeting as private. */
        private_meeting?: boolean;
        /** Whether to send registrants an email confirmation.
         * `true` - Send a confirmation email.
         * `false` - Do not send a confirmation email. */
        registrants_confirmation_email?: boolean;
        /** Whether to send registrants email notifications about their registration approval, cancellation, or rejection.

* `true` - Send an email notification.
* `false` - Do not send an email notification.

 Set this value to `true` to also use the `registrants_confirmation_email` parameter. */
        registrants_email_notification?: boolean;
        /** The meeting's registration type. 
* `1` - Attendees register once and can attend any meeting occurrence. 
* `2` - Attendees must register for each meeting occurrence. 
* `3` - Attendees register once and can select one or more meeting occurrences to attend.

This field is only for recurring meetings with fixed times (`8`). This value defaults to `1`. */
        registration_type?: 1 | 2 | 3;
        /** Whether to include social media sharing buttons on the meeting's registration page. This setting is only applied to meetings with registration enabled. */
        show_share_button?: boolean;
        /** Whether to show the meeting's join information on the registration confirmation page. This setting is only applied to meetings with registration enabled. */
        show_join_info?: boolean;
        /** Whether to use a [Personal Meeting ID (PMI)](/docs/api/using-zoom-apis/#understanding-personal-meeting-id-pmi) for the meeting. This field is only used for scheduled meetings(`2`) and recurring meetings with no fixed time(`3`). If not provided, the default value will be based on the user's setting. */
        use_pmi?: boolean;
        /** Whether to enable the [**Waiting Room** feature](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room). If this value is `true`, this **disables** the `join_before_host` setting. */
        waiting_room?: boolean;
        /** Configuration settings for the meeting's waiting room. */
        waiting_room_options?: {
            /** Specifies the waiting room behavior for this meeting.
             * `follow_setting` - Use the Zoom web portal setting.
             * `custom` - Specify which participants should go into the waiting room. */
            mode: 'follow_setting' | 'custom';
            /** Specifies which participants should be placed into the waiting room. Required if `mode` is set to `custom`.
             * `everyone` - Everyone.
             * `users_not_in_account` - Users not in your account.
             * `users_not_in_account_or_whitelisted_domains` - Users who are not in your account and not part of your whitelisted domains.
             * `users_not_on_invite` - Users not on the meeting invite. */
            who_goes_to_waiting_room?:
                | 'everyone'
                | 'users_not_in_account'
                | 'users_not_in_account_or_whitelisted_domains'
                | 'users_not_on_invite';
        };
        /** Whether to add a watermark when viewing a shared screen. If not provided, the default value will be based on the user's setting. */
        watermark?: boolean;
        /** Whether the **Allow host to save video order** feature is enabled. */
        host_save_video_order?: boolean;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** Whether to allow an alternative host to manage meeting summaries. */
        alternative_host_manage_meeting_summary?: boolean;
        /** Whether to allow an alternative host to manage meeting cloud recordings. */
        alternative_host_manage_cloud_recording?: boolean;
        /** Whether to set the meeting as an internal meeting. */
        internal_meeting?: boolean;
        /** Information about the **Enable continuous meeting chat** feature. This setting only applies to scheduled and recurring meetings, types `2`, `3`, and `8`. It is **not supported** for type `1` instant meetings or type `10` screen share only meetings. */
        continuous_meeting_chat?: {
            /** Whether to enable the **Enable continuous meeting chat** setting. The default value is based on user settings. When the **Enable continuous meeting chat** setting is enabled, the default value is true. When the setting is disabled, the default value is false. */
            enable?: boolean;
            /** Whether to enable the **Automatically add invited external users** setting. */
            auto_add_invited_external_users?: boolean;
            /** Whether to enable the **Automatically add meeting participants** setting. */
            auto_add_meeting_participants?: boolean;
        };
        /** Whether to set the meeting as a participant focused meeting. */
        participant_focused_meeting?: boolean;
        /** Whether to push meeting changes to the calendar. 

 To enable this feature, configure the **Configure Calendar and Contacts Service** in the user's profile page of the Zoom web portal and enable the **Automatically sync Zoom calendar events information bi-directionally between Zoom and integrated calendars.** setting in the **Settings** page of the Zoom web portal.
* `true` - Push meeting changes to the calendar.
* `false` - Do not push meeting changes to the calendar. */
        push_change_to_calendar?: boolean;
        /** The meeting's resources. */
        resources?: {
            /** The resource type. */
            resource_type?: 'whiteboard';
            /** The resource ID. */
            resource_id?: string;
            /** The permission levels for users to access the whiteboard.
             * `editor` - Users with link access can edit the board.
             * `commenter` - Users with link access can comment on the board.
             * `viewer` - Users with link access can view the board. */
            permission_level?: 'editor' | 'commenter' | 'viewer';
        }[];
        /** Whether to automatically start a meeting summary. If not provided, the default value will be based on the user's setting. */
        auto_start_meeting_summary?: boolean;
        /** Defines who will receive a summary after this meeting. This field is applicable only when `auto_start_meeting_summary` is set to `true`.

* `1` - Only meeting host.

* `2` - Only meeting host, co-hosts, and alternative hosts.

* `3` - Only meeting host and meeting invitees in our organization.

* `4` - All meeting invitees including those outside of our organization. If not provided, the default value will be based on the user's setting. */
        who_will_receive_summary?: 1 | 2 | 3 | 4;
        /** Whether to automatically start AI Companion questions. If not provided, the default value will be based on the user's setting. */
        auto_start_ai_companion_questions?: boolean;
        /** Defines who can ask questions about this meeting's transcript. This field is applicable only when `auto_start_ai_companion_questions` is set to `true`.

* `1` - All participants and invitees.

* `2` - All participants only from when they join.

* `3` - Only meeting host.

* `4` - Participants and invitees in our organization.

* `5` - Participants in our organization only from when they join. If not provided, the default value will be based on the user's setting. */
        who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
        /** The summary template ID used to generate a meeting summary based on a predefined template. To get available summary templates, use the **Get user summary templates** API. If not provided, the default value will be based on the user's setting. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.com/hc/en). */
        summary_template_id?: string;
        /** Enable the device testing. */
        device_testing?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and co-hosts to fully control the mute state of participants. If not provided, the default value will be based on the user's setting. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to disable the participant video during meeting. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        disable_participant_video?: boolean;
        /** Whether to include authenticated guest's email addresses in meetings' attendee reports. */
        email_in_attendee_report?: boolean;
    };
    /** The meeting's start time. This field is only used for scheduled or recurring meetings with a fixed time. This supports local time and GMT formats. 
* To set a meeting's start time in GMT, use the `yyyy-MM-ddTHH:mm:ssZ` date-time format, such as `2020-03-31T12:02:00Z`. 
* To set a meeting's start time using a specific timezone, use the `yyyy-MM-ddTHH:mm:ss` date-time format and specify the [timezone ID](/docs/api/references/abbreviations/#timezones) in the `timezone` field. If you do not specify a timezone, the `timezone` value defaults to your Zoom account's timezone. You can also use `UTC` for the `timezone` value.

**Note:** If `start_time` is not specified or is set to a past value, it defaults to the current time. */
    start_time?: string;
    /** The account admin meeting template ID used to schedule a meeting using a [meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates). For a list of account admin-provided meeting templates, use the [**List meeting templates**](/docs/api-reference/zoom-api/methods#operation/listMeetingTemplates) API.
     * At this time, this field **only** accepts account admin meeting template IDs.
     * To enable the account admin meeting templates feature, [contact Zoom support](https://support.zoom.us/hc/en-us). */
    template_id?: string;
    /** The timezone to assign to the `start_time` value. This field is only used for scheduled or recurring meetings with a fixed time.

For a list of supported timezones and their formats, see our [timezone list](/docs/api/references/abbreviations/#timezones). */
    timezone?: string;
    /** The meeting's topic. */
    topic?: string;
    /** Information about the meeting's tracking fields. */
    tracking_fields?: {
        /** The tracking field's label. */
        field: string;
        /** The tracking field's value. */
        value?: string;
    }[];
    /** The type of meeting.
     * `1` - An instant meeting.
     * `2` - A scheduled meeting.
     * `3` - A recurring meeting with no fixed time.
     * `8` - A recurring meeting with fixed time.
     * `10` - A screen share only meeting. */
    type?: 1 | 2 | 3 | 8 | 10;
};

/** Create a meeting - Response */
export type ZoomApi$Meeting$Create$Response = {
    /** The ID of the user who scheduled this meeting on behalf of the host. */
    assistant_id?: string;
    /** The meeting host's email address. */
    host_email?: string;
    /** The ID of the user who is set as the meeting host. */
    host_id?: string;
    /** The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in **long** format(represented as int64 data type in JSON), also known as the meeting number. */
    id?: number;
    /** Unique meeting ID. Each meeting instance generates its own meeting UUID - after a meeting ends, a new UUID is generated for the next instance of the meeting. Retrieve a list of UUIDs from past meeting instances using the [**List past meeting instances**](/docs/api/rest/reference/zoom-api/methods#operation/pastMeetings) API. [Double encode](/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a `/` or contains `//` in it. */
    uuid?: string;
    /** The URL that registrants can use to register for a meeting. This field is only returned for meetings that have enabled registration. */
    registration_url?: string;
    /** Agenda */
    agenda?: string;
    /** The date and time when this meeting was created. */
    created_at?: string;
    /** The meeting duration. */
    duration?: number;
    /** Encrypted passcode for third party endpoints (H323/SIP). */
    encrypted_password?: string;
    /** Passcode for participants to join the meeting via [PSTN](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference). */
    pstn_password?: string;
    /** H.323/SIP room system passcode */
    h323_password?: string;
    /** URL for participants to join the meeting. This URL should only be shared with users that you would like to invite for the meeting. */
    join_url?: string;
    /** The URL to join the chat. */
    chat_join_url?: string;
    /** Array of occurrence objects. */
    occurrences?: {
        /** Duration. */
        duration?: number;
        /** Occurrence ID. The unique identifier for an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. */
        occurrence_id?: string;
        /** Start time. */
        start_time?: string;
        /** Occurrence status. 
 `available` - Available occurrence.  
 `deleted` -  Deleted occurrence. */
        status?: 'available' | 'deleted';
    }[];
    /** The meeting passcode. By default, it can be up to 10 characters in length and may contain alphanumeric characters as well as special characters such as !, @, #, etc. */
    password?: string;
    /** [Personal meeting ID (PMI)](/docs/api/using-zoom-apis/#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time. */
    pmi?: string;
    /** Whether the prescheduled meeting was created via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This only supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time).
     * `true` - A GSuite prescheduled meeting.
     * `false` - A regular meeting. */
    pre_schedule?: boolean;
    /** Recurrence object. Use this object only for a meeting with type `8`, a recurring meeting with fixed time.  */
    recurrence?: {
        /** Select the final date when the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Cannot be used with `end_times`. */
        end_date_time?: string;
        /** Select how many times the meeting should recur before it is canceled. If `end_times` is set to 0, it means there is no end time. The maximum number of recurring is 60. Cannot be used with `end_date_time`. */
        end_times?: number;
        /** Use this field only if you're scheduling a recurring meeting of type `3` to state the day in a month when the meeting should recur. The value range is from 1 to 31.

For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as this field's value and `1` as the `repeat_interval` field's value. Instead, to have the meeting recur every three months on 23rd of the month, change the value of the `repeat_interval` field to `3`. */
        monthly_day?: number;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field. 

  
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** Define the interval for the meeting to recur. For instance, to schedule a meeting that recurs every two months, set this field's value to `2` and the value of the `type` parameter as `3`. 

For a daily meeting, the maximum interval you can set is `99` days. For a weekly meeting the maximum interval that you can set is  of `50` weeks. For a monthly meeting, there is a maximum of `10` months.

 */
        repeat_interval?: number;
        /** Recurrence meeting types.
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** This field is required **if you're scheduling a recurring meeting of type** `2` to state the days of the week when the meeting should repeat.
 
  This field's value could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `1` as this field's value.  
   
  **Note:** If you would like the meeting to occur on multiple days of a week, provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays, provide `1,3` as this field's value.

   
 `1`  - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    /** Meeting settings. */
    settings?: {
        /** Add additional meeting [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](/docs/api/references/abbreviations/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).

For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing.

To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field. */
        additional_data_center_regions?: string[];
        /** Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting). */
        allow_multiple_devices?: boolean;
        /** A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs. */
        alternative_hosts?: string;
        /** Flag to determine whether to send email notifications to alternative hosts, default value is true. */
        alternative_hosts_email_notification?: boolean;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** Whether to allow an alternative host to manage meeting summaries. */
        alternative_host_manage_meeting_summary?: boolean;
        /** Whether to allow an alternative host to manage meeting cloud recordings. */
        alternative_host_manage_cloud_recording?: boolean;
        /** Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.**   
   
 

`0` - Automatically approve.  
 `1` - Manually approve.  
 `2` - No registration required. */
        approval_type?: 0 | 1 | 2;
        /** Approve or block users from specific regions or countries from joining this meeting.
         */
        approved_or_denied_countries_or_regions?: {
            /** List of countries or regions from where participants can join this meeting.  */
            approved_list?: string[];
            /** List of countries or regions from where participants can not join this meeting.  */
            denied_list?: string[];
            /** `true` - Setting enabled to either allow users or block users from specific regions to join your meetings.   
 

`false` - Setting disabled. */
            enable?: boolean;
            /** Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting.   
   
 
`approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.  
   
 
`deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list` */
            method?: 'approve' | 'deny';
        };
        /** Determine how participants can join the audio portion of the meeting.  
 `both` - Both Telephony and VoIP.  
 `telephony` - Telephony only.  
 `voip` - VoIP only.  
 `thirdParty` - Third party audio conference. */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference info. */
        audio_conference_info?: string;
        /** If user has configured [Sign Into Zoom with Specified Domains](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated. */
        authentication_domains?: string;
        /** The participants added here will receive unique meeting invite links and bypass authentication. */
        authentication_exception?: {
            /** The participant's email address. */
            email?: string;
            /** The participant's name. */
            name?: string;
            /** URL for participants to join the meeting. */
            join_url?: string;
        }[];
        /** Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f). */
        authentication_name?: string;
        /** Meeting authentication option ID. */
        authentication_option?: string;
        /** Automatic recording.
 `local` - Record on local.  
 `cloud` -  Record on cloud.  
 `none` - Disabled. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Automatically add meeting recordings to a video channel in Video Management. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        auto_add_recording_to_video_management?: {
            /** Whether to automatically add the meeting recording to video management. */
            enable: boolean;
            /** List of video management channels where the meeting recording will be added. */
            channels?: {
                /** The unique ID of a video management channel. */
                channel_id: string;
                /** The name of the video management channel. */
                name?: string;
            }[];
        };
        /** Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4). */
        breakout_room?: {
            /** Set this field's value to `true` to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option. */
            enable?: boolean;
            /** Create a room or rooms. */
            rooms?: {
                /** The breakout room's name. */
                name?: string;
                /** Email addresses of the participants who are to be assigned to the breakout room. */
                participants?: string[];
            }[];
        };
        /** The type of calendar integration used to schedule the meeting. 
* `1` - [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in) 
* `2` - [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)

Works with the `private_meeting` field to determine whether to share details of meetings or not. */
        calendar_type?: 1 | 2;
        /** Close registration after event date. */
        close_registration?: boolean;
        /** Host meeting in China. */
        cn_meeting?: boolean;
        /** Contact email for registration */
        contact_email?: string;
        /** Contact name for registration */
        contact_name?: string;
        /** Custom keys and values assigned to the meeting. */
        custom_keys?: {
            /** Custom key associated with the user. */
            key?: string;
            /** Value of the custom key associated with the user. */
            value?: string;
        }[];
        /** Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`. */
        email_notification?: boolean;
        /** Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**.
 
`enhanced_encryption` - Enhanced encryption. Encryption is stored in the cloud if you enable this option.   
 

`e2ee` - [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions features. */
        encryption_type?: 'enhanced_encryption' | 'e2ee';
        /** Only signed in users can join this meeting.

**This field is deprecated and will not be supported in the future.**    
   
 As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting. */
        enforce_login?: boolean;
        /** Only signed in users with specified domains can join meetings.

**This field is deprecated and will not be supported in the future.**    
   
 As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting. */
        enforce_login_domains?: string;
        /** Whether the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) is enabled when the meeting starts. */
        focus_mode?: boolean;
        /** List of global dial-in countries. */
        global_dial_in_countries?: string[];
        /** Global dial-in countries or regions. */
        global_dial_in_numbers?: {
            /** City of the number, such as Chicago. */
            city?: string;
            /** The country code, such as BR. */
            country?: string;
            /** Full name of country, such as Brazil. */
            country_name?: string;
            /** A phone number, such as +1 2332357613. */
            number?: string;
            /** Type of number. */
            type?: 'toll' | 'tollfree';
        }[];
        /** Start video when the host joins the meeting. */
        host_video?: boolean;
        /** Host meeting in India. */
        in_meeting?: boolean;
        /** If the value of `join_before_host` field is set to `true`, use this field to indicate time limits when a participant may join a meeting before a host.

*  `0` - Allow participant to join anytime.
*  `5`- Allow participant to join 5 minutes before meeting start time.
 * `10` - Allow participant to join 10 minutes before meeting start time.
* `15` - Allow the participant to join 15 minutes before the meeting's start time. */
        jbh_time?: 0 | 5 | 10 | 15;
        /** Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings. */
        join_before_host?: boolean;
        /** [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for meeting. */
        question_and_answer?: {
            /** * `true` - Enable [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for meeting.

* `false` - Disable Q&amp;A for meeting. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** * `true`: Allow participants to submit questions.

* `false`: Do not allow submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists..

* `false` - Do not allow anonymous questions.(Not supported for simulive meeting.) */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want attendees to be able to view answered questions only or view all questions.

* `answered` - Attendees are able to view answered questions only.

*  `all` - Attendees are able to view all questions submitted in the Q&amp;A. */
            question_visibility?: 'answered' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can not answer questions or leave a comment in the question thread */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can click the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can not click the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
        };
        /** The meeting's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details.

**Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the meeting. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the meeting's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The meeting's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the meeting. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the meeting's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/api-reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** `true` - Only authenticated users can join meetings. */
        meeting_authentication?: boolean;
        /** Mute participants upon entry. */
        mute_upon_entry?: boolean;
        /** Start video when participants join the meeting. */
        participant_video?: boolean;
        /** Whether the meeting is set as private. */
        private_meeting?: boolean;
        /** Whether to send registrants an email confirmation.
         * `true` - Send a confirmation email.
         * `false` - Do not send a confirmation email. */
        registrants_confirmation_email?: boolean;
        /** Whether to send registrants email notifications about their registration approval, cancellation, or rejection.

* `true` - Send an email notification.
* `false` - Do not send an email notification.

 Set this value to `true` to also use the `registrants_confirmation_email` parameter. */
        registrants_email_notification?: boolean;
        /** Registration type. Used for recurring meeting with fixed time only. 
 `1` - Attendees register once and can attend any of the occurrences.  
 `2` - Attendees need to register for each occurrence to attend.  
 `3` - Attendees register once and can choose one or more occurrences to attend. */
        registration_type?: 1 | 2 | 3;
        /** Show social share buttons on the meeting registration page.
This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting). */
        show_share_button?: boolean;
        /** Whether to show the meeting's join information on the registration confirmation page. This setting is only applied to meetings with registration enabled. */
        show_join_info?: boolean;
        /** Whether to use a [Personal Meeting ID (PMI)](/docs/api/using-zoom-apis/#understanding-personal-meeting-id-pmi) for the meeting. This field is only used for scheduled meetings(`2`) and recurring meetings with no fixed time(`3`). If not provided, the default value will be based on the user's setting. */
        use_pmi?: boolean;
        /** Enable the waiting room. */
        waiting_room?: boolean;
        /** Configuration settings for the meeting's waiting room. */
        waiting_room_options?: {
            /** Specifies the waiting room behavior for this meeting.
             * `follow_setting` - Use the Zoom web portal setting.
             * `custom` - Specify which participants should go into the waiting room. */
            mode: 'follow_setting' | 'custom';
            /** Specifies which participants should be placed into the waiting room. Required if `mode` is set to `custom`.
             * `everyone` - Everyone.
             * `users_not_in_account` - Users not in your account.
             * `users_not_in_account_or_whitelisted_domains` - Users who are not in your account and not part of your whitelisted domains.
             * `users_not_on_invite` - Users not on the meeting invite. */
            who_goes_to_waiting_room?:
                | 'everyone'
                | 'users_not_in_account'
                | 'users_not_in_account_or_whitelisted_domains'
                | 'users_not_on_invite';
        };
        /** Whether to add a watermark when viewing a shared screen. If not provided, the default value will be based on the user's setting. */
        watermark?: boolean;
        /** Whether the **Allow host to save video order** feature is enabled. */
        host_save_video_order?: boolean;
        /** Whether to set the meeting as an internal meeting. */
        internal_meeting?: boolean;
        /** A list of the meeting's invitees. */
        meeting_invitees?: {
            /** The invitee's email address. */
            email?: string;
        }[];
        /** Information about the **Enable continuous meeting chat** feature. This setting only applies to scheduled and recurring meetings (type `2`, `3`, and `8`). It is **not supported** for type `1` instant meetings or type `10` screen share only meetings. */
        continuous_meeting_chat?: {
            /** Whether to enable the **Enable continuous meeting chat** setting. The default value is based on user settings. When the **Enable continuous meeting chat** setting is enabled, the default value is true. When the setting is disabled, the default value is false. */
            enable?: boolean;
            /** Whether to enable the **Automatically add invited external users** setting. */
            auto_add_invited_external_users?: boolean;
            /** Whether to enable the **Automatically add meeting participants** setting. */
            auto_add_meeting_participants?: boolean;
            /** The channel's ID. */
            channel_id?: string;
        };
        /** Whether to set the meeting as a participant focused meeting. */
        participant_focused_meeting?: boolean;
        /** Whether to push meeting changes to the calendar. 

 To enable this feature, configure the **Configure Calendar and Contacts Service** in the user's profile page of the Zoom web portal and enable the **Automatically sync Zoom calendar events information bi-directionally between Zoom and integrated calendars.** setting in the **Settings** page of the Zoom web portal.
* `true` - Push meeting changes to the calendar.
* `false` - Do not push meeting changes to the calendar. */
        push_change_to_calendar?: boolean;
        /** The meeting's resources. */
        resources?: {
            /** The resource type. */
            resource_type?: 'whiteboard';
            /** The resource ID. */
            resource_id?: string;
            /** The permission levels for users to access the whiteboard.
             * `editor` - Users with link access can edit the board.
             * `commenter` - Users with link access can comment on the board.
             * `viewer` - Users with link access can view the board. */
            permission_level?: 'editor' | 'commenter' | 'viewer';
        }[];
        /** Whether to automatically start a meeting summary. If not provided, the default value will be based on the user's setting. */
        auto_start_meeting_summary?: boolean;
        /** Defines who will receive a summary after this meeting. This field is applicable only when `auto_start_meeting_summary` is set to `true`.
         * `1` - Only meeting host.
         * `2` - Only meeting host, co-hosts, and alternative hosts.
         * `3` - Only meeting host and meeting invitees in our organization.
         * `4` - All meeting invitees including those outside of our organization. If not provided, the default value will be based on the user's setting. */
        who_will_receive_summary?: 1 | 2 | 3 | 4;
        /** Whether to automatically start AI Companion questions. If not provided, the default value will be based on the user's setting. */
        auto_start_ai_companion_questions?: boolean;
        /** Defines who can ask questions about this meeting's transcript. This field is applicable only when `auto_start_ai_companion_questions` is set to `true`.
         * `1` - All participants and invitees.
         * `2` - All participants only from when they join.
         * `3` - Only meeting host.
         * `4` - Participants and invitees in our organization.
         * `5` - Participants in our organization only from when they join. If not provided, the default value will be based on the user's setting. */
        who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
        /** The summary template ID used to generate a meeting summary based on a predefined template. To get available summary templates, use the **Get user summary templates** API. If not provided, the default value will be based on the user's setting. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.com/hc/en). */
        summary_template_id?: string;
        /** Enable the device testing. */
        device_testing?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and co-hosts to fully control the mute state of participants. If not provided, the default value will be based on the user's setting. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to disable the participant video during meeting. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        disable_participant_video?: boolean;
        /** Whether to include authenticated guest's email addresses in meetings' attendee reports. */
        email_in_attendee_report?: boolean;
    };
    /** Meeting start date-time in UTC/GMT, such as `2020-03-31T12:02:00Z`. */
    start_time?: string;
    /** URL to start the meeting. This URL should only be used by the host of the meeting and **should not be shared with anyone other than the host** of the meeting, since anyone with this URL will be able to log in to the Zoom Client as the host of the meeting. */
    start_url?: string;
    /** The meeting status.
     * `waiting` - The meeting has not started.
     * `started` - The meeting is currently in progress. */
    status?: 'waiting' | 'started';
    /** The account admin meeting template ID used to schedule a meeting using a [meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates). For a list of account admin-provided meeting templates, use the [**List meeting templates**](/docs/api-reference/zoom-api/methods#operation/listMeetingTemplates) API.
     * At this time, this field **only** accepts account admin meeting template IDs.
     * To enable the account admin meeting templates feature, [contact Zoom support](https://support.zoom.us/hc/en-us). */
    template_id?: string;
    /** Timezone to format `start_time`. */
    timezone?: string;
    /** Meeting topic. */
    topic?: string;
    /** Tracking fields. */
    tracking_fields?: {
        /** The tracking field's label. */
        field?: string;
        /** The tracking field's value. */
        value?: string;
        /** Indicates whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the meeting scheduling options in the Zoom Web Portal or not.

`true`: Tracking field is visible.   
 

`false`: Tracking field is not visible to the users in the meeting options in the Zoom Web Portal but the field was used while scheduling this meeting via API. An invisible tracking field can be used by users while scheduling meetings via API only.  */
        visible?: boolean;
    }[];
    /** The meeting type.
     * `1` - An instant meeting.
     * `2` - A scheduled meeting.
     * `3` - A recurring meeting with no fixed time.
     * `8` - A recurring meeting with fixed time.
     * `10` - A screen share only meeting. */
    type?: 1 | 2 | 3 | 8 | 10;
    /** The meeting dynamic host key. */
    dynamic_host_key?: string;
    /** The platform through which the meeting was created.
     * `other` - Created through another platform.
     * `open_api` - Created through Open API.
     * `web_portal` - Created through the web portal. */
    creation_source?: 'other' | 'open_api' | 'web_portal';
};

/** Delete a meeting - Query parameters */
export type ZoomApi$Meeting$Delete$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
    /** `true`: Notify host and alternative host about the meeting cancellation via email.
`false`: Do not send any email notification. */
    schedule_for_reminder: boolean;
    /** `true`: Notify registrants about the meeting cancellation via email. 

`false`: Do not send any email notification to meeting registrants. 

The default value of this field is `false`. */
    cancel_meeting_reminder: boolean;
}>;

/** Get meeting invitation - Response */
export type ZoomApi$Meeting$Invitation$Response = {
    /** Meeting invitation. */
    invitation?: string;
    /** A list of SIP phone addresses. */
    sip_links?: string[];
};

/** Create a meeting's invite links - Request body */
export type ZoomApi$Meeting$Invite$Links$Create$Request = {
    /** The attendees list. */
    attendees?: {
        /** User display name. */
        name: string;
        /** Whether to disable participant video when joining the meeting. If not provided or set to `false`, the participant video will follow the meeting's default settings. */
        disable_video?: boolean;
        /** Whether to disable participant audio when joining the meeting. If not provided or set to `false`, the participant audio will follow the meeting's default settings. */
        disable_audio?: boolean;
    }[];
    /** The invite link's expiration time, in seconds. 

This value defaults to `7200`. */
    ttl?: number;
};

/** Create a meeting's invite links - Response */
export type ZoomApi$Meeting$Invite$Links$Create$Response = {
    /** The attendee list. */
    attendees?: {
        /** The URL to join the meeting. */
        join_url?: string;
        /** The user's display name. */
        name?: string;
    }[];
};

/** Update livestream status - Request body */
export type ZoomApi$Meeting$Live$Stream$Status$Update$Request = {
    /** The meeting's livestream status.
     * `start` - Start a livestream.
     * `stop` - Stop an ongoing livestream.
     * `mode` - Control a livestream view at runtime. */
    action?: 'start' | 'stop' | 'mode';
    /** The meeting's livestreaming settings. */
    settings?: {
        /** Whether to display the name of the active speaker during a meeting's livestream. Use this field if you pass the `start` value for the `action` field. */
        active_speaker_name?: boolean;
        /** The display name of the meeting's livestream. Use this field if you pass the `start` value for the `action` field. */
        display_name?: string;
        /** The layout of the meeting's livestream. Use this field if you pass the `start` or `mode` value for the `action` field.
         * `follow_host` - Follow host view.
         * `gallery_view` - Gallery view.
         * `speaker_view` - Speaker view. */
        layout?: 'follow_host' | 'gallery_view' | 'speaker_view';
        /** The livestream's closed caption type for this session. Use this field if you pass the `start` or `mode` value for the `action` field.
         * `burnt-in` - Burnt in captions.
         * `embedded` - Embedded captions.
         * `off` - Turn off captions. */
        close_caption?: 'burnt-in' | 'embedded' | 'off';
    };
};

/** Update a livestream - Request body */
export type ZoomApi$Meeting$Live$Stream$Update$Request = {
    /** The live stream page URL. */
    page_url: string;
    /** Stream name and key. */
    stream_key: string;
    /** Streaming URL. */
    stream_url: string;
    /** The number of pixels in each dimension that the video camera can display, required when a user enables 1080p. Use a value of `720p` or `1080p` */
    resolution?: string;
};

/** Get a meeting's join token for live streaming - Response */
export type ZoomApi$Meeting$Live$Streaming$Join$Token$Response = {
    /** The number of seconds the join token is valid for before it expires. This value always returns `120`. */
    expire_in?: 120;
    /** The join token. */
    token?: string;
};

/** Get a meeting's archive token for local archiving - Response */
export type ZoomApi$Meeting$Local$Archiving$Archive$Token$Response = {
    /** The number of seconds the archive token is valid for before it expires. This value always returns `120`. */
    expire_in?: 120;
    /** The archive token. */
    token?: string;
};

/** Get a meeting's join token for local recording - Query parameters */
export type ZoomApi$Meeting$Local$Recording$Join$Token$Params = Partial<{
    /** Whether to bypass the waiting room. */
    bypass_waiting_room: boolean;
}>;

/** Get a meeting's join token for local recording - Response */
export type ZoomApi$Meeting$Local$Recording$Join$Token$Response = {
    /** The number of seconds the join token is valid for before it expires. This value always returns `120`. */
    expire_in?: 120;
    /** The join token. */
    token?: string;
};

/** Get a meeting - Query parameters */
export type ZoomApi$Meeting$Params = Partial<{
    /** Meeting occurrence ID. Provide this field to view meeting details of a particular occurrence of the [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings). */
    occurrence_id: string;
    /** Set this field's value to `true` to view meeting details of all previous occurrences of a [recurring meeting](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings).  */
    show_previous_occurrences: boolean;
}>;

/** Create a meeting poll - Request body */
export type ZoomApi$Meeting$Poll$Create$Request = {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The type of poll: 
* `1` &mdash; Poll. 
* `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` &mdash; Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** The information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question: 
* `true` &mdash; The participant must answer the question. 
* `false` &mdash; The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box: 
* `true` &mdash; Show as a drop-down box. 
* `false` &mdash; Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type:
         * `single` &mdash; Single choice.
         * `multiple` &mdash; Multiple choice.
         * `matching` &mdash; Matching.
         * `rank_order` &mdash; Rank order.
         * `short_answer` &mdash; Short answer.
         * `long_answer` &mdash; Long answer.
         * `fill_in_the_blank` &mdash; Fill in the blank.
         * `rating_scale` &mdash; Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** Create a meeting poll - Response */
export type ZoomApi$Meeting$Poll$Create$Response = {
    /** The meeting poll ID */
    id?: string;
    /** The status of the meeting poll:  
 `notstart` - Poll not started  
 `started` - Poll started  
 `ended` - Poll ended  
 `sharing` - Sharing poll results */
    status?: 'notstart' | 'started' | 'ended' | 'sharing';
} & {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The type of poll: 
* `1` &mdash; Poll. 
* `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` &mdash; Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** The information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question: 
* `true` &mdash; The participant must answer the question. 
* `false` &mdash; The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box: 
* `true` &mdash; Show as a drop-down box. 
* `false` &mdash; Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type:
         * `single` &mdash; Single choice.
         * `multiple` &mdash; Multiple choice.
         * `matching` &mdash; Matching.
         * `rank_order` &mdash; Rank order.
         * `short_answer` &mdash; Short answer.
         * `long_answer` &mdash; Long answer.
         * `fill_in_the_blank` &mdash; Fill in the blank.
         * `rating_scale` &mdash; Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** Get a meeting poll - Response */
export type ZoomApi$Meeting$Poll$Get$Response = {
    /** The meeting poll ID. */
    id?: string;
    /** The meeting poll's status.
`notstart` - Poll not started
`started` - Poll started
`ended` - Poll ended
`sharing` - Sharing poll results
`deactivated` - Poll deactivated */
    status?: 'notstart' | 'started' | 'ended' | 'sharing' | 'deactivated';
} & {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The poll's type. 
* `1` - Poll. 
* `2` - Advanced poll. This feature must be enabled in your Zoom account. 
* `3` - Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** Information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls.
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a one-character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is required if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type.
         * `single` - Single choice.
         * `multiple` - Multiple choice.
         * `matching` - Matching.
         * `rank_order` - Rank order.
         * `short_answer` - Short answer.
         * `long_answer` - Long answer.
         * `fill_in_the_blank` - Fill in the blank.
         * `rating_scale` - Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** Update a meeting poll - Request body */
export type ZoomApi$Meeting$Poll$Update$Request = {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The type of poll. 
* `1` - Poll. 
* `2` - Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` - Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** The information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls.
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a one character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` - The answer is case-sensitive. 
* `false` - The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You must provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type.
         * `single` - Single choice.
         * `multiple` - Multiple choice.
         * `matching` - Matching.
         * `rank_order` - Rank order.
         * `short_answer` - Short answer.
         * `long_answer` - Long answer.
         * `fill_in_the_blank` - Fill in the blank.
         * `rating_scale` - Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** List meeting polls - Query parameters */
export type ZoomApi$Meeting$Polls$Params = Partial<{
    /** Whether to query for polls with the **Anonymous** option enabled:
     * `true` &mdash; Query for polls with the **Anonymous** option enabled.
     * `false` &mdash; Do not query for polls with the **Anonymous** option enabled. */
    anonymous: boolean;
}>;

/** List meeting polls - Response */
export type ZoomApi$Meeting$Polls$Response = {
    /** An array of polls. */
    polls?: ({
        /** The poll ID. */
        id?: string;
        /** The meeting poll's status.
`notstart` - Poll not started
`started` - Poll started
`ended` - Poll ended
`sharing` - Sharing poll results
`deactivated` - Poll deactivated */
        status?: 'notstart' | 'started' | 'ended' | 'sharing' | 'deactivated';
    } & {
        /** Whether meeting participants can answer poll questions anonymously. 

This value defaults to `false`. */
        anonymous?: boolean;
        /** The type of poll. 
* `1` - Poll. 
* `2` - Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` - Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
        poll_type?: 1 | 2 | 3;
        /** Information about the poll's questions. */
        questions?: {
            /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
             * For `short_answer` polls, a maximum of 500 characters.
             * For `long_answer` polls, a maximum of 2,000 characters. */
            answer_max_character?: number;
            /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
            answer_min_character?: number;
            /** Whether participants must answer the question: 
* `true` &mdash; The participant must answer the question. 
* `false` &mdash; The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
            answer_required?: boolean;
            /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
            answers?: string[];
            /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
            case_sensitive?: boolean;
            /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
            name?: string;
            /** Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
                /** The question prompt's correct answers:
                 * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
                 * For `rank_order` polls, you can only provide one correct answer. */
                prompt_right_answers?: string[];
            }[];
            /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
            rating_max_label?: string;
            /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
            rating_max_value?: number;
            /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
            rating_min_label?: string;
            /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
            rating_min_value?: number;
            /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
            right_answers?: string[];
            /** Whether to display the radio selection as a drop-down box: 
* `true` &mdash; Show as a drop-down box. 
* `false` &mdash; Do not show as a drop-down box. 

This value defaults to `false`. */
            show_as_dropdown?: boolean;
            /** The poll's question and answer type:
             * `single` &mdash; Single choice.
             * `multiple` &mdash; Multiple choice.
             * `matching` &mdash; Matching.
             * `rank_order` &mdash; Rank order.
             * `short_answer` &mdash; Short answer.
             * `long_answer` &mdash; Long answer.
             * `fill_in_the_blank` &mdash; Fill in the blank.
             * `rating_scale` &mdash; Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
        }[];
        /** The poll's title, up to 64 characters. */
        title?: string;
    })[];
    /** The number of all records available across pages */
    total_records?: number;
};

/** Update participant Real-Time Media Streams (RTMS) app status - Request body */
export type ZoomApi$Meeting$R$T$M$S$Status$Update$Request = {
    /** The participant's RTMS app status.
     * `start` - Start an RTMS app.
     * `stop` - Stop an ongoing RTMS app.
     * `pause` - Pause an ongoing RTMS app.
     * `resume` - Resume a paused RTMS app. */
    action?: 'start' | 'stop' | 'pause' | 'resume';
    /** The participant's RTMS app settings. */
    settings?: {
        /** The participant's user ID. This field is optional. If not provided, the user ID will be automatically obtained from the authentication token. This value matches the `id` field in the [**Get a user**](/docs/api/users/#tag/users/GET/users/{userId}) API response. Use this field if you pass the `start`, `stop`, `pause` or `resume` value for the `action` field. */
        participant_user_id?: string;
        /** The unique identifier of the authorized app, configured in the Account Settings under **Allow apps to access meeting content**. This app must have host approval to access in-meeting content. Use this field if you pass the `start`, `stop`, `pause` or `resume` value for the `action` field. */
        client_id: string;
    };
};

/** Create a recording registrant - Request body */
export type ZoomApi$Meeting$Recording$Registrant$Create$Request = {
    /** The registrant's address. */
    address?: string;
    /** The registrant's city. */
    city?: string;
    /** The registrant's questions and comments. */
    comments?: string;
    /** The registrant's two-letter [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). */
    country?: string;
    /** Information about custom questions. */
    custom_questions?: {
        /** The title of the custom question. */
        title?: string;
        /** The custom question's response value. This has a limit of 128 characters. */
        value?: string;
    }[];
    /** The registrant's email address. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
    email: string;
    /** The registrant's first name. */
    first_name: string;
    /** The registrant's industry. */
    industry?: string;
    /** The registrant's job title. */
    job_title?: string;
    /** The registrant's last name. */
    last_name?: string;
    /** The registrant's number of employees.
     * `1-20`
     * `21-50`
     * `51-100`
     * `101-250`
     * `251-500`
     * `501-1,000`
     * `1,001-5,000`
     * `5,001-10,000`
     * `More than 10,000` */
    no_of_employees?:
        | ''
        | '1-20'
        | '21-50'
        | '51-100'
        | '101-250'
        | '251-500'
        | '501-1,000'
        | '1,001-5,000'
        | '5,001-10,000'
        | 'More than 10,000';
    /** The registrant's organization. */
    org?: string;
    /** The registrant's phone number. */
    phone?: string;
    /** The registrant's purchasing time frame.
     * `Within a month`
     * `1-3 months`
     * `4-6 months`
     * `More than 6 months`
     * `No timeframe` */
    purchasing_time_frame?:
        | ''
        | 'Within a month'
        | '1-3 months'
        | '4-6 months'
        | 'More than 6 months'
        | 'No timeframe';
    /** The registrant's role in the purchase process.
     * `Decision Maker`
     * `Evaluator/Recommender`
     * `Influencer`
     * `Not involved` */
    role_in_purchase_process?:
        | ''
        | 'Decision Maker'
        | 'Evaluator/Recommender'
        | 'Influencer'
        | 'Not involved';
    /** The registrant's state or province. */
    state?: string;
    /** The registrant's status.
     * `approved` - Registrant is approved.
     * `denied` - Registrant is denied.
     * `pending` - Registrant is waiting for approval. */
    status?: 'approved' | 'denied' | 'pending';
    /** The registrant's ZIP or postal code. */
    zip?: string;
};

/** Create a recording registrant - Response */
export type ZoomApi$Meeting$Recording$Registrant$Create$Response = {
    /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in &quot;**long**&quot; format(represented as int64 data type in JSON), also known as the meeting number. */
    id?: number;
    /** Registrant ID */
    registrant_id?: string;
    /** Share URL for the on-demand recording. This includes the &ldquo;tk&rdquo; token for the registrant. This is similar to the token that Zoom returns in the URL response to join a registered meeting, for example: `url?tk=xxxx`. Except while the meeting registration token can be used to join the meeting, this token can only be used to watch the recording. */
    share_url?: string;
    /** Meeting Topic */
    topic?: string;
};

/** Update a registrant's status - Request body */
export type ZoomApi$Meeting$Recording$Registrant$Status$Request = {
    action: 'approve' | 'deny';
    /** List of registrants. */
    registrants?: {
        id?: string;
    }[];
};

/** List recording registrants - Query parameters */
export type ZoomApi$Meeting$Recording$Registrants$Params = Partial<{
    /** Query by the registrant's status.
     * `pending` - The registration is pending.
     * `approved` - The registrant is approved.
     * `denied` - The registration is denied. */
    status: 'pending' | 'approved' | 'denied';
    /** The number of records returned within a single API call. */
    page_size: number;
    /** **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** List recording registrants - Response */
export type ZoomApi$Meeting$Recording$Registrants$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** Information about the cloud recording registrants. */
    registrants?: ({
        /** The registrant's ID. */
        id?: string;
    } & {
        /** The registrant's address. */
        address?: string;
        /** The registrant's city. */
        city?: string;
        /** The registrant's questions and comments. */
        comments?: string;
        /** The registrant's two-letter [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). */
        country?: string;
        /** Information about custom questions. */
        custom_questions?: {
            /** The custom question's title. */
            title?: string;
            /** The custom question's response value. This has a limit of 128 characters. */
            value?: string;
        }[];
        /** The registrant's email address. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
        email: string;
        /** The registrant's first name. */
        first_name: string;
        /** The registrant's industry. */
        industry?: string;
        /** The registrant's job title. */
        job_title?: string;
        /** The registrant's last name. */
        last_name?: string;
        /** The registrant's number of employees.
         * `1-20`
         * `21-50`
         * `51-100`
         * `101-250`
         * `251-500`
         * `501-1,000`
         * `1,001-5,000`
         * `5,001-10,000`
         * `More than 10,000` */
        no_of_employees?:
            | ''
            | '1-20'
            | '21-50'
            | '51-100'
            | '101-250'
            | '251-500'
            | '501-1,000'
            | '1,001-5,000'
            | '5,001-10,000'
            | 'More than 10,000';
        /** The registrant's organization. */
        org?: string;
        /** The registrant's phone number. */
        phone?: string;
        /** The registrant's purchasing time frame.
         * `Within a month`
         * `1-3 months`
         * `4-6 months`
         * `More than 6 months`
         * `No timeframe` */
        purchasing_time_frame?:
            | ''
            | 'Within a month'
            | '1-3 months'
            | '4-6 months'
            | 'More than 6 months'
            | 'No timeframe';
        /** The registrant's role in the purchase process.
         * `Decision Maker`
         * `Evaluator/Recommender`
         * `Influencer`
         * `Not involved` */
        role_in_purchase_process?:
            | ''
            | 'Decision Maker'
            | 'Evaluator/Recommender'
            | 'Influencer'
            | 'Not involved';
        /** The registrant's state or province. */
        state?: string;
        /** The registrant's status.
         * `approved` - Registrant is approved.
         * `denied` - Registrant is denied.
         * `pending` - Registrant is waiting for approval. */
        status?: 'approved' | 'denied' | 'pending';
        /** The registrant's ZIP or postal code. */
        zip?: string;
    })[];
};

/** Add a meeting registrant - Query parameters */
export type ZoomApi$Meeting$Registrant$Create$Params = Partial<{
    /** A comma-separated list of meeting occurrence IDs. You can get this value with the [Get a meeting](/docs/api-reference/zoom-api/methods#operation/meeting) API. */
    occurrence_ids: string;
}>;

/** Add a meeting registrant - Request body */
export type ZoomApi$Meeting$Registrant$Create$Request = {
    /** The registrant's first name. */
    first_name: string;
    /** The registrant's last name. */
    last_name?: string;
    /** The registrant's email address. */
    email: string;
    /** The registrant's address. */
    address?: string;
    /** The registrant's city. */
    city?: string;
    /** The registrant's state or province. */
    state?: string;
    /** The registrant's ZIP or postal code. */
    zip?: string;
    /** The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries). */
    country?: string;
    /** The registrant's phone number. */
    phone?: string;
    /** The registrant's questions and comments. */
    comments?: string;
    /** Information about custom questions. */
    custom_questions?: {
        /** The title of the custom question. */
        title?: string;
        /** The custom question's response value. This has a limit of 128 characters. */
        value?: string;
    }[];
    /** The registrant's industry. */
    industry?: string;
    /** The registrant's job title. */
    job_title?: string;
    /** The registrant's number of employees:
     * `1-20`
     * `21-50`
     * `51-100`
     * `101-500`
     * `500-1,000`
     * `1,001-5,000`
     * `5,001-10,000`
     * `More than 10,000` */
    no_of_employees?:
        | ''
        | '1-20'
        | '21-50'
        | '51-100'
        | '101-500'
        | '500-1,000'
        | '1,001-5,000'
        | '5,001-10,000'
        | 'More than 10,000';
    /** The registrant's organization. */
    org?: string;
    /** The registrant's purchasing time frame:
     * `Within a month`
     * `1-3 months`
     * `4-6 months`
     * `More than 6 months`
     * `No timeframe` */
    purchasing_time_frame?:
        | ''
        | 'Within a month'
        | '1-3 months'
        | '4-6 months'
        | 'More than 6 months'
        | 'No timeframe';
    /** The registrant's role in the purchase process:
     * `Decision Maker`
     * `Evaluator/Recommender`
     * `Influencer`
     * `Not involved` */
    role_in_purchase_process?:
        | ''
        | 'Decision Maker'
        | 'Evaluator/Recommender'
        | 'Influencer'
        | 'Not involved';
} & {
    /** The registrant's language preference for confirmation emails:
     * `en-US` &mdash; English (US)
     * `de-DE` &mdash; German (Germany)
     * `es-ES` &mdash; Spanish (Spain)
     * `fr-FR` &mdash; French (France)
     * `jp-JP` &mdash; Japanese
     * `pt-PT` &mdash; Portuguese (Portugal)
     * `ru-RU` &mdash; Russian
     * `zh-CN` &mdash; Chinese (PRC)
     * `zh-TW` &mdash; Chinese (Taiwan)
     * `ko-KO` &mdash; Korean
     * `it-IT` &mdash; Italian (Italy)
     * `vi-VN` &mdash; Vietnamese
     * `pl-PL` &mdash; Polish
     * `Tr-TR` &mdash; Turkish */
    language?:
        | 'en-US'
        | 'de-DE'
        | 'es-ES'
        | 'fr-FR'
        | 'jp-JP'
        | 'pt-PT'
        | 'ru-RU'
        | 'zh-CN'
        | 'zh-TW'
        | 'ko-KO'
        | 'it-IT'
        | 'vi-VN'
        | 'pl-PL'
        | 'Tr-TR';
} & {
    /** If a meeting was scheduled with the `approval_type` field value of `1` (manual approval) but you want to automatically approve meeting registrants, set the value of this field to `true`. 

**Note:** You cannot use this field to change approval setting for a meeting originally scheduled with the `approval_type` field value of `0` (automatic approval). */
    auto_approve?: boolean;
};

/** Add a meeting registrant - Response */
export type ZoomApi$Meeting$Registrant$Create$Response = {
    /** The meeting ID. */
    id?: number;
    /** The URL the registrant can use to join the meeting. 

The API will not return this field if the meeting was [created](/docs/api-reference/zoom-api/methods#operation/meetingCreate) with the `approval_type` field value of `1` (manual approval). */
    join_url?: string;
    /** The registrant's ID. */
    registrant_id?: string;
    /** The meeting's start time. */
    start_time?: string;
    /** The meeting's topic. */
    topic?: string;
    /** Array of occurrence objects. */
    occurrences?: {
        /** Duration. */
        duration?: number;
        /** Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. */
        occurrence_id?: string;
        /** Start time. */
        start_time?: string;
        /** Occurrence status. */
        status?: string;
    }[];
    /** The participant PIN code is used to authenticate audio participants before they join the meeting. */
    participant_pin_code?: number;
};

/** Get a meeting registrant - Response */
export type ZoomApi$Meeting$Registrant$Get$Response = {
    id?: string;
} & {
    /** The registrant's address. */
    address?: string;
    /** The registrant's city. */
    city?: string;
    /** The registrant's questions and comments. */
    comments?: string;
    /** The registrant's two-letter [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). */
    country?: string;
    /** Information about custom questions. */
    custom_questions?: {
        /** The title of the custom question. */
        title?: string;
        /** The custom question's response value. This has a limit of 128 characters. */
        value?: string;
    }[];
    /** The registrant's email address. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
    email: string;
    /** The registrant's first name. */
    first_name: string;
    /** The registrant's industry. */
    industry?: string;
    /** The registrant's job title. */
    job_title?: string;
    /** The registrant's last name. */
    last_name?: string;
    /** The registrant's number of employees.
     * `1-20`
     * `21-50`
     * `51-100`
     * `101-250`
     * `251-500`
     * `501-1,000`
     * `1,001-5,000`
     * `5,001-10,000`
     * `More than 10,000` */
    no_of_employees?:
        | ''
        | '1-20'
        | '21-50'
        | '51-100'
        | '101-250'
        | '251-500'
        | '501-1,000'
        | '1,001-5,000'
        | '5,001-10,000'
        | 'More than 10,000';
    /** The registrant's organization. */
    org?: string;
    /** The registrant's phone number. */
    phone?: string;
    /** The registrant's purchasing time frame.
     * `Within a month`
     * `1-3 months`
     * `4-6 months`
     * `More than 6 months`
     * `No timeframe` */
    purchasing_time_frame?:
        | ''
        | 'Within a month'
        | '1-3 months'
        | '4-6 months'
        | 'More than 6 months'
        | 'No timeframe';
    /** The registrant's role in the purchase process.
     * `Decision Maker`
     * `Evaluator/Recommender`
     * `Influencer`
     * `Not involved` */
    role_in_purchase_process?:
        | ''
        | 'Decision Maker'
        | 'Evaluator/Recommender'
        | 'Influencer'
        | 'Not involved';
    /** The registrant's state or province. */
    state?: string;
    /** The registrant's status.
     * `approved` - Registrant is approved.
     * `denied` - Registrant is denied.
     * `pending` - Registrant is waiting for approval. */
    status?: 'approved' | 'denied' | 'pending';
    /** The registrant's ZIP or postal code. */
    zip?: string;
} & {
    /** The registrant's registration date and time. */
    create_time?: string;
    /** The URL with which the approved registrant can join the meeting. */
    join_url?: string;
    /** The registrant's registration status.
     * `approved` - The registrant is approved to join the meeting.
     * `pending` - The registrant's registration is pending.
     * `denied` - The registrant was declined to join the meeting. */
    status?: 'approved' | 'pending' | 'denied';
    /** The participant PIN code is used to authenticate audio participants before they join the meeting. */
    participant_pin_code?: number;
};

/** Update registration questions - Request body */
export type ZoomApi$Meeting$Registrant$Question$Update$Request = {
    /** Array of Registrant Custom Questions */
    custom_questions?: {
        /** Answer choices for the question. Can not be used for `short` question type as this type of question requires registrants to type out the answer. */
        answers?: string[];
        /** Indicates whether or not the custom question is required to be answered by participants or not. */
        required?: boolean;
        /** Title of the custom question. */
        title?: string;
        /** The type of question being asked. */
        type?: 'short' | 'single';
    }[];
    /** Array of registrant questions. */
    questions?: {
        /** The question's field name. */
        field_name?:
            | 'last_name'
            | 'address'
            | 'city'
            | 'country'
            | 'zip'
            | 'state'
            | 'phone'
            | 'industry'
            | 'org'
            | 'job_title'
            | 'purchasing_time_frame'
            | 'role_in_purchase_process'
            | 'no_of_employees'
            | 'comments';
        /** Indicates whether or not the displayed fields are required to be filled out by registrants. */
        required?: boolean;
    }[];
};

/** Update registrant's status - Query parameters */
export type ZoomApi$Meeting$Registrant$Status$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
}>;

/** Update registrant's status - Request body */
export type ZoomApi$Meeting$Registrant$Status$Request = {
    /** Registrant status. 
 `approve` - Approve registrant.  
 `cancel` - Cancel previously approved registrant's registration.  
 `deny` - Deny registrant. */
    action: 'approve' | 'cancel' | 'deny';
    /** List of registrants. */
    registrants?: {
        email?: string;
        id?: string;
    }[];
};

/** List meeting registrants - Query parameters */
export type ZoomApi$Meeting$Registrants$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
    /** Query by the registrant's status.
     * `pending` - The registration is pending.
     * `approved` - The registrant is approved.
     * `denied` - The registration is denied. */
    status: 'pending' | 'approved' | 'denied';
    /** The number of records returned within a single API call. */
    page_size: number;
    /** **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** List registration questions  - Response */
export type ZoomApi$Meeting$Registrants$Questions$Get$Response = {
    /** Array of custom questions for registrants. */
    custom_questions?: {
        /** Answer choices for the question. Can not be used for `short` question type as this type of question requires registrants to type out the answer. */
        answers?: string[];
        /** Whether or not the custom question is required to be answered by participants or not. */
        required?: boolean;
        /** Title of the custom question. */
        title?: string;
        /** Type of the question being asked. */
        type?: 'short' | 'single';
    }[];
    /** Array of registrant questions. */
    questions?: {
        /** Field name of the question. */
        field_name?:
            | 'last_name'
            | 'address'
            | 'city'
            | 'country'
            | 'zip'
            | 'state'
            | 'phone'
            | 'industry'
            | 'org'
            | 'job_title'
            | 'purchasing_time_frame'
            | 'role_in_purchase_process'
            | 'no_of_employees'
            | 'comments';
        /** Whether or not the displayed fields are required to be filled out by registrants. */
        required?: boolean;
    }[];
};

/** List meeting registrants - Response */
export type ZoomApi$Meeting$Registrants$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** List of registrant objects. */
    registrants?: ({
        /** Registrant ID. */
        id?: string;
    } & {
        /** The registrant's address. */
        address?: string;
        /** The registrant's city. */
        city?: string;
        /** The registrant's questions and comments. */
        comments?: string;
        /** The registrant's two-letter [country code](/docs/api/rest/other-references/abbreviation-lists/#countries). */
        country?: string;
        /** Information about custom questions. */
        custom_questions?: {
            /** The title of the custom question. */
            title?: string;
            /** The custom question's response value. This has a limit of 128 characters. */
            value?: string;
        }[];
        /** The registrant's email address. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
        email: string;
        /** The registrant's first name. */
        first_name: string;
        /** The registrant's industry. */
        industry?: string;
        /** The registrant's job title. */
        job_title?: string;
        /** The registrant's last name. */
        last_name?: string;
        /** The registrant's number of employees.
         * `1-20`
         * `21-50`
         * `51-100`
         * `101-250`
         * `251-500`
         * `501-1,000`
         * `1,001-5,000`
         * `5,001-10,000`
         * `More than 10,000` */
        no_of_employees?:
            | ''
            | '1-20'
            | '21-50'
            | '51-100'
            | '101-250'
            | '251-500'
            | '501-1,000'
            | '1,001-5,000'
            | '5,001-10,000'
            | 'More than 10,000';
        /** The registrant's organization. */
        org?: string;
        /** The registrant's phone number. */
        phone?: string;
        /** The registrant's purchasing time frame.
         * `Within a month`
         * `1-3 months`
         * `4-6 months`
         * `More than 6 months`
         * `No timeframe` */
        purchasing_time_frame?:
            | ''
            | 'Within a month'
            | '1-3 months'
            | '4-6 months'
            | 'More than 6 months'
            | 'No timeframe';
        /** The registrant's role in the purchase process.
         * `Decision Maker`
         * `Evaluator/Recommender`
         * `Influencer`
         * `Not involved` */
        role_in_purchase_process?:
            | ''
            | 'Decision Maker'
            | 'Evaluator/Recommender'
            | 'Influencer'
            | 'Not involved';
        /** The registrant's state or province. */
        state?: string;
        /** The registrant's status.
         * `approved` - Registrant is approved.
         * `denied` - Registrant is denied.
         * `pending` - Registrant is waiting for approval. */
        status?: 'approved' | 'denied' | 'pending';
        /** The registrant's ZIP or postal code. */
        zip?: string;
    } & {
        /** The time when the registrant registered. */
        create_time?: string;
        /** The URL that an approved registrant can use to join the meeting or webinar. */
        join_url?: string;
        /** The status of the registrant's registration.   
  `approved` - User has been successfully approved for the webinar.  
  `pending` - The registration is still pending.  
  `denied` - User has been denied from joining the webinar. */
        status?: string;
        /** The participant PIN code is used to authenticate audio participants before they join the meeting. */
        participant_pin_code?: number;
    })[];
};

/** Get a meeting - Response */
export type ZoomApi$Meeting$Response = {
    /** The ID of the user who scheduled this meeting on behalf of the host. */
    assistant_id?: string;
    /** The meeting host's email address. */
    host_email?: string;
    /** The ID of the user who is set as the meeting host. */
    host_id?: string;
    /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in **long** format, represented as int64 data type in JSON, also known as the meeting number. */
    id?: number;
    /** Unique meeting ID. Each meeting instance generates its own meeting UUID - after a meeting ends, a new UUID is generated for the next instance of the meeting. Retrieve a list of UUIDs from past meeting instances using the [**List past meeting instances**](/docs/api/rest/reference/zoom-api/methods#operation/pastMeetings) API. [Double encode](/docs/api/rest/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a `/` or contains `//` in it.
     */
    uuid?: string;
    /** The URL that registrants can use to register for a meeting. This field is only returned for meetings that have enabled registration. */
    registration_url?: string;
    /** The meeting description. */
    agenda?: string;
    /** The creation time.  */
    created_at?: string;
    /** The meeting duration. */
    duration?: number;
    /** Encrypted passcode for third party endpoints (H323/SIP). */
    encrypted_password?: string;
    /** Password for participants to join the meeting via [PSTN](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference). */
    pstn_password?: string;
    /** H.323/SIP room system passcode. */
    h323_password?: string;
    /** The URL for participants to join the meeting. This URL should only be shared with users invited to the meeting. */
    join_url?: string;
    /** The URL to join the chat. */
    chat_join_url?: string;
    /** Array of occurrence objects. */
    occurrences?: {
        /** Duration. */
        duration?: number;
        /** Occurrence ID. The unique identifier for an occurrence of a recurring meeting. [Recurring meetings](https://support.zoom.us/hc/en-us/articles/214973206-Scheduling-Recurring-Meetings) can have a maximum of 50 occurrences. */
        occurrence_id?: string;
        /** Start time. */
        start_time?: string;
        /** Occurrence status. 
 `available` - Available occurrence.  
 `deleted` -  Deleted occurrence. */
        status?: 'available' | 'deleted';
    }[];
    /** Meeting passcode. */
    password?: string;
    /** [Personal meeting ID (PMI)](/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time. */
    pmi?: string;
    /** Whether the prescheduled meeting was created via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time).
     * `true` - A GSuite prescheduled meeting.
     * `false` - A regular meeting. */
    pre_schedule?: boolean;
    /** Recurrence object. Use this object only for a meeting with type `8`, a recurring meeting with a fixed time.  */
    recurrence?: {
        /** Select the final date when the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with `end_times`.) */
        end_date_time?: string;
        /** Select how many times the meeting should recur before it is canceled. If `end_times` is set to 0, it means there is no end time. The maximum number of recurrences is 60. Cannot be used with `end_date_time`. */
        end_times?: number;
        /** Use this field only if you're scheduling a recurring meeting of type `3` to state the day in a month when the meeting should recur. The value range is from 1 to 31.

For example, for a meeting to recur on 23rd of each month, provide `23` as this field's value and `1` as the `repeat_interval` field's value. Instead, to have the meeting to recur every three months on 23rd of the month, change the `repeat_interval` field's value to `3`. */
        monthly_day?: number;
        /** Use this field only if you're scheduling a recurring meeting of type `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.**   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field. 

  
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** Define the interval when the meeting should recur. For instance, to schedule a meeting that recurs every two months, you must set this field's value as `2` and the `type` parameter's value as `3`. 

For a daily meeting, the maximum interval you can set is `99` days. For a weekly meeting the maximum interval that you can set is  of `50` weeks. For a monthly meeting, there is a maximum of `10` months.

 */
        repeat_interval?: number;
        /** Recurring meeting types. 
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** This field is required if you're scheduling a recurring meeting of type `2` to state which days of the week the meeting should repeat.   
    
  The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `1` as this field's value.  
   
  **Note** To have the meeting occur on multiple days of a week, provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `1,3` as this field's value.


 `1`  - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    /** Meeting settings. */
    settings?: {
        /** Add additional meeting [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](/docs/api/references/abbreviations/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).

For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing.

To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field. */
        additional_data_center_regions?: string[];
        /** Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting). */
        allow_multiple_devices?: boolean;
        /** A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs. */
        alternative_hosts?: string;
        /** Flag to determine whether to send email notifications to alternative hosts, default value is true. */
        alternative_hosts_email_notification?: boolean;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** Whether to allow an alternative host to manage meeting summaries. */
        alternative_host_manage_meeting_summary?: boolean;
        /** Whether to allow an alternative host to manage meeting cloud recordings. */
        alternative_host_manage_cloud_recording?: boolean;
        /** Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.**   
   
 

`0` - Automatically approve.  
 `1` - Manually approve.  
 `2` - No registration required. */
        approval_type?: 0 | 1 | 2;
        /** Approve or block users from specific regions/countries from joining this meeting.
         */
        approved_or_denied_countries_or_regions?: {
            /** List of countries/regions from where participants can join this meeting.  */
            approved_list?: string[];
            /** List of countries or regions from where participants can not join this meeting.  */
            denied_list?: string[];
            /** `true` - Setting enabled to either allow users or block users from specific regions to join your meetings.   
 

`false` - Setting disabled. */
            enable?: boolean;
            /** Specify whether to allow users from specific regions to join this meeting; or block users from specific regions from joining this meeting.   
   
 
`approve`: Allow users from specific regions/countries to join this meeting. If this setting is selected, the approved regions/countries must be included in the `approved_list`.  
   
 
`deny`: Block users from specific regions/countries from joining this meeting. If this setting is selected, the approved regions/countries must be included in the `denied_list` */
            method?: 'approve' | 'deny';
        };
        /** Determine how participants can join the audio portion of the meeting.  
 `both` - Both Telephony and VoIP.  
 `telephony` - Telephony only.  
 `voip` - VoIP only.  
 `thirdParty` - Third party audio conference. */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference information. */
        audio_conference_info?: string;
        /** If user has configured [Sign Into Zoom with Specified Domains](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated. */
        authentication_domains?: string;
        /** The participants added here will receive unique meeting invite links and bypass authentication. */
        authentication_exception?: {
            /** The participant's email address. */
            email?: string;
            /** The participant's name. */
            name?: string;
            /** URL for participants to join the meeting */
            join_url?: string;
        }[];
        /** Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f). */
        authentication_name?: string;
        /** Meeting authentication option ID. */
        authentication_option?: string;
        /** Automatic recording.  
 `local` - Record on local.  
 `cloud` -  Record on cloud.  
 `none` - Disabled. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Automatically add meeting recordings to a video channel in video management. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        auto_add_recording_to_video_management?: {
            /** Whether to automatically add the meeting recording to video management. */
            enable: boolean;
            /** List of video management channels where the meeting recording will be added. */
            channels?: {
                /** The unique ID of a video management channel. */
                channel_id: string;
                /** The name of the video management channel. */
                name?: string;
            }[];
        };
        /** Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4). */
        breakout_room?: {
            /** Set this field's value to `true` if you would like to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option. */
            enable?: boolean;
            /** Create room or rooms. */
            rooms?: {
                /** The breakout room's name. */
                name?: string;
                /** Email addresses of the participants who are to be assigned to the breakout room. */
                participants?: string[];
            }[];
        };
        /** Indicates the type of calendar integration used to schedule the meeting. 
* `1` - [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in) 
* `2` - [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)

Works with the `private_meeting` field to determine whether to share details of meetings or not. */
        calendar_type?: 1 | 2;
        /** Close registration after event date. */
        close_registration?: boolean;
        /** Host meeting in China. */
        cn_meeting?: boolean;
        /** Contact email for registration. */
        contact_email?: string;
        /** Contact name for registration. */
        contact_name?: string;
        /** Custom keys and values assigned to the meeting. */
        custom_keys?: {
            /** Custom key associated with the user. */
            key?: string;
            /** Value of the custom key associated with the user. */
            value?: string;
        }[];
        /** Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`. */
        email_notification?: boolean;
        /** Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features (e.g. cloud recording, phone/SIP/H.323 dial-in) will be **automatically disabled**. 
 
`enhanced_encryption` - Enhanced encryption. Encryption is stored in the cloud if you enable this option.   
 

`e2ee` - [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions features. */
        encryption_type?: 'enhanced_encryption' | 'e2ee';
        /** Only signed in users can join this meeting.

**This field is deprecated and will not be supported in the future.**    
   
 As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting. */
        enforce_login?: boolean;
        /** Only signed in users with specified domains can join meetings.

**This field is deprecated and will not be supported in the future.**    
   
 As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting. */
        enforce_login_domains?: string;
        /** Whether the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) is enabled when the meeting starts. */
        focus_mode?: boolean;
        /** List of global dial-in countries. */
        global_dial_in_countries?: string[];
        /** Global Dial-in Countries and Regions */
        global_dial_in_numbers?: {
            /** City of the number, if any. For example, Chicago. */
            city?: string;
            /** Country code, such as BR. */
            country?: string;
            /** Full name of country, such as Brazil. */
            country_name?: string;
            /** Phone number, such as +1 2332357613. */
            number?: string;
            /** Type of number.  */
            type?: 'toll' | 'tollfree';
        }[];
        /** Start video when the host joins the meeting. */
        host_video?: boolean;
        /** Host meeting in India. */
        in_meeting?: boolean;
        /** If the value of `join_before_host` field is set to true, this field can be used to indicate time limits when a participant may join a meeting before a host.

*  `0` - Allow participant to join anytime.
*  `5` - Allow participant to join 5 minutes before meeting start time.
 * `10` - Allow participant to join 10 minutes before meeting start time.
 * `15` - Allow participant to join 15 minutes before meeting start time. */
        jbh_time?: 0 | 5 | 10 | 15;
        /** Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings. */
        join_before_host?: boolean;
        /** [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for meeting. */
        question_and_answer?: {
            /** * `true` - Enable [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for the meeting.

* `false` - Disable Q&amp;A for the meeting. */
            enable?: boolean;
            /** * `true` - Allow participants to submit questions.

* `false` - Don't allow participants to submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists.

* `false` - Don't allow anonymous questions. Not supported for simulive meetings. */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want attendees to be able to view only answered questions, or view all questions.

* `answered` - Attendees can only view answered questions.

* `all` - Attendees can view all questions submitted in the Q&amp;A. */
            question_visibility?: 'answered' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can't answer questions or leave a comment in the question thread. */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can select the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can't select the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
        };
        /** The meeting's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details.

**Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the meeting. */
            enable?: boolean;
            /** Information about the meeting's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The meeting's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the meeting. */
            enable?: boolean;
            /** Information about the meeting's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/rest/reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** `true` - Only authenticated users can join meetings. */
        meeting_authentication?: boolean;
        /** Mute participants upon entry. */
        mute_upon_entry?: boolean;
        /** Start video when participants join the meeting. */
        participant_video?: boolean;
        /** Whether the meeting is set as private. */
        private_meeting?: boolean;
        /** Whether to send registrants an email confirmation.
         * `true` - Send a confirmation email.
         * `false` - Do not send a confirmation email. */
        registrants_confirmation_email?: boolean;
        /** Whether to send registrants email notifications about their registration approval, cancellation, or rejection.

* `true` - Send an email notification.
* `false` - Do not send an email notification.

 Set this value to `true` to also use the `registrants_confirmation_email` parameter. */
        registrants_email_notification?: boolean;
        /** Registration type. Used for recurring meeting with fixed time only. 
 `1` Attendees register once and can attend any of the occurrences.  
 `2` Attendees need to register for each occurrence to attend.  
 `3` Attendees register once and can choose one or more occurrences to attend. */
        registration_type?: 1 | 2 | 3;
        /** Show social share buttons on the meeting registration page.
This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting). */
        show_share_button?: boolean;
        /** Whether to show the meeting's join information on the registration confirmation page. This setting is only applied to meetings with registration enabled. */
        show_join_info?: boolean;
        /** Whether to use a [Personal Meeting ID (PMI)](/docs/api/using-zoom-apis/#understanding-personal-meeting-id-pmi) for the meeting. This field is only used for scheduled meetings(`2`) and recurring meetings with no fixed time(`3`). */
        use_pmi?: boolean;
        /** Enable waiting room */
        waiting_room?: boolean;
        /** Configuration settings for the meeting's waiting room. */
        waiting_room_options?: {
            /** This field specifies the waiting room behavior for this meeting.
             * `follow_setting` - Use the Zoom web portal setting.
             * `custom` - Specify which participants should go into the waiting room. */
            mode: 'follow_setting' | 'custom';
            /** This field specifies which participants should be placed into the waiting room. Required if `mode` is set to `custom`.
             * `everyone` - Everyone.
             * `users_not_in_account` - Users not in your account.
             * `users_not_in_account_or_whitelisted_domains` - Users who are not in your account and not part of your whitelisted domains.
             * `users_not_on_invite` - Users not on the meeting invite. */
            who_goes_to_waiting_room?:
                | 'everyone'
                | 'users_not_in_account'
                | 'users_not_in_account_or_whitelisted_domains'
                | 'users_not_on_invite';
        };
        /** This field adds a watermark when viewing a shared screen. */
        watermark?: boolean;
        /** Whether the **Allow host to save video order** feature is enabled. */
        host_save_video_order?: boolean;
        /** Whether to set the meeting as an internal meeting. */
        internal_meeting?: boolean;
        /** A list of the meeting's invitees. */
        meeting_invitees?: {
            /** The invitee's email address. */
            email?: string;
            /** Whether the meeting invitee is an internal user. */
            internal_user?: boolean;
        }[];
        /** Information about the **Enable continuous meeting chat** feature. This setting only applies to scheduled and recurring meetings, types `2`, `3`, or `8`. It is **not supported** for type `1` instant meetings or type `10` screen share only meetings. */
        continuous_meeting_chat?: {
            /** Whether to enable the **Enable continuous meeting chat** setting. */
            enable?: boolean;
            /** Whether to enable the **Automatically add invited external users** setting. */
            auto_add_invited_external_users?: boolean;
            /** Whether to enable the **Automatically add meeting participants** setting. */
            auto_add_meeting_participants?: boolean;
            /** The channel's ID. */
            channel_id?: string;
        };
        /** Whether to set the meeting as a participant focused meeting. */
        participant_focused_meeting?: boolean;
        /** Whether to push meeting changes to the calendar. 

 To enable this feature, configure the **Configure Calendar and Contacts Service** in the user's profile page of the Zoom web portal and enable the **Automatically sync Zoom calendar events information bi-directionally between Zoom and integrated calendars.** setting in the **Settings** page of the Zoom web portal.
* `true` - Push meeting changes to the calendar.
* `false` - Do not push meeting changes to the calendar. */
        push_change_to_calendar?: boolean;
        /** The meeting's resources. */
        resources?: {
            /** The resource type. */
            resource_type?: 'whiteboard';
            /** The resource ID. */
            resource_id?: string;
            /** The permission levels for users to access the whiteboard.
             * `editor` - Users with link access can edit the board.
             * `commenter` - Users with link access can comment on the board.
             * `viewer` - Users with link access can view the board. */
            permission_level?: 'editor' | 'commenter' | 'viewer';
        }[];
        /** Whether to automatically start a meeting summary. */
        auto_start_meeting_summary?: boolean;
        /** Defines who will receive a summary after this meeting. This field is applicable only when `auto_start_meeting_summary` is set to `true`.
         * `1` - Only meeting host.
         * `2` - Only meeting host, co-hosts, and alternative hosts.
         * `3` - Only meeting host and meeting invitees in our organization.
         * `4` - All meeting invitees including those outside of our organization. */
        who_will_receive_summary?: 1 | 2 | 3 | 4;
        /** Whether to automatically start AI Companion questions. */
        auto_start_ai_companion_questions?: boolean;
        /** Defines who can ask questions about this meeting's transcript. This field is applicable only when `auto_start_ai_companion_questions` is set to `true`.
         * `1` - All participants and invitees.
         * `2` - All participants only from when they join.
         * `3` - Only meeting host.
         * `4` - Participants and invitees in our organization.
         * `5` - Participants in our organization only from when they join. */
        who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
        /** The summary template ID used to generate a meeting summary based on a predefined template. To get available summary templates, use the **Get user summary templates** API. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.com/hc/en). */
        summary_template_id?: string;
        /** Enable the device testing. */
        device_testing?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and co-hosts to fully control the mute state of participants. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to disable the participant video during meeting. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        disable_participant_video?: boolean;
        /** Whether to include authenticated guest's email addresses in meetings' attendee reports. */
        email_in_attendee_report?: boolean;
    };
    /** Meeting start time in GMT or UTC. Start time will not be returned if the meeting is an **instant** meeting.
     */
    start_time?: string;
    /** The `start_url` of a meeting is a URL that a host or an alternative host can start the meeting. 

The expiration time for the `start_url` field listed in the response of the [**Create a meeting**](/docs/api/rest/reference/zoom-api/methods#operation/meetingCreate) API is two hours for all regular users. 
	
For users created using the `custCreate` option via the [**Create users**](/docs/api/rest/reference/zoom-api/methods#operation/userCreate) API, the expiration time of the `start_url` field is 90 days.
	
For security reasons, to retrieve the updated value for the `start_url` field programmatically after the expiry time, you must call the [**Get a meeting](/docs/api/rest/reference/zoom-api/methods#operation/meeting) API and refer to the value of the `start_url` field in the response.  
 This URL should only be used by the host of the meeting and **should not be shared with anyone other than the host** of the meeting as anyone with this URL will be able to login to the Zoom Client as the host of the meeting. */
    start_url?: string;
    /** The meeting status.
     * `waiting` - The meeting has not started.
     * `started` - The meeting is currently in progress. */
    status?: 'waiting' | 'started';
    /** The account admin meeting template ID used to schedule a meeting using a [meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates). For a list of account admin-provided meeting templates, use the [**List meeting templates**](/docs/api-reference/zoom-api/methods#operation/listMeetingTemplates) API.
     * At this time, this field **only** accepts account admin meeting template IDs.
     * To enable the account admin meeting templates feature, [contact Zoom support](https://support.zoom.us/hc/en-us). */
    template_id?: string;
    /** The timezone to format the meeting start time. */
    timezone?: string;
    /** Meeting topic. */
    topic?: string;
    /** Tracking fields. */
    tracking_fields?: {
        /** The tracking field's label. */
        field?: string;
        /** The tracking field's value. */
        value?: string;
        /** Indicates whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the meeting scheduling options in the Zoom Web Portal or not.

`true`: Tracking field is visible.   
 

`false`: Tracking field is not visible to the users when they look at the meeting details in the Zoom Web Portal but the field was used while scheduling this meeting via API. An invisible tracking field can be used by users while scheduling meetings via API only.  */
        visible?: boolean;
    }[];
    /** The type of meeting.
     * `1` - An instant meeting.
     * `2` - A scheduled meeting.
     * `3` - A recurring meeting with no fixed time.
     * `4` - A PMI Meeting.
     * `8` - A recurring meeting with fixed time.
     * `10` - A screen share only meeting. */
    type?: 1 | 2 | 3 | 4 | 8 | 10;
    /** The meeting dynamic host key. */
    dynamic_host_key?: string;
    /** The platform used when creating the meeting.
     * `other` - Created through another platform.
     * `open_api` - Created through Open API.
     * `web_portal` - Created through the web portal. */
    creation_source?: 'other' | 'open_api' | 'web_portal';
};

/** Update meeting status - Request body */
export type ZoomApi$Meeting$Status$Request = {
    /** `end` - End a meeting.  
 
`recover` - [Recover](https://support.zoom.us/hc/en-us/articles/360038297111-Recover-a-deleted-meeting) a deleted meeting.
 */
    action?: 'end' | 'recover';
};

/** Get a meeting survey - Response */
export type ZoomApi$Meeting$Survey$Get$Response = {
    /** Information about the customized meeting survey. */
    custom_survey?: {
        /** The survey's title, up to 64 characters. */
        title?: string;
        /** Allow participants to anonymously answer survey questions. 

 This value defaults to `true`. */
        anonymous?: boolean;
        /** Whether to display the number in the question name. 

 This value defaults to `true`. */
        numbered_questions?: boolean;
        /** Whether to display the question type in the question name. 

 This value defaults to `false`. */
        show_question_type?: boolean;
        /** The survey's feedback, up to 320 characters. 

 This value defaults to `Thank you so much for taking the time to complete the survey. Your feedback really makes a difference.`. */
        feedback?: string;
        /** Information about the meeting survey's questions. */
        questions?: {
            /** The survey question, up to 420 characters. */
            name?: string;
            /** The survey's question and answer type.
             * `single` - Single choice.
             * `multiple` - Multiple choice.
             * `matching` - Matching.
             * `rank_order` - Rank order
             * `short_answer` - Short answer
             * `long_answer` - Long answer.
             * `fill_in_the_blank` - Fill in the blank
             * `rating_scale` - Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
            /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

 This value defaults to `false`. */
            answer_required?: boolean;
            /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

 This value defaults to `false`. */
            show_as_dropdown?: boolean;
            /** The survey question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` questions, you can only provide a maximum of 50 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
            answers?: string[];
            /** Information about the prompt questions. This field only applies to `matching` and `rank_order` questions. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
            }[];
            /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` questions. You must provide at least a **one** character minimum value. */
            answer_min_character?: number;
            /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` questions.
             * For `short_answer` question, a maximum of 500 characters.
             * For `long_answer` question, a maximum of 2,000 characters. */
            answer_max_character?: number;
            /** The rating scale's minimum value. This value cannot be less than zero. 

 This field only applies to the `rating_scale` survey. */
            rating_min_value?: number;
            /** The rating scale's maximum value, up to a maximum value of 10. 

 This field only applies to the `rating_scale` survey. */
            rating_max_value?: number;
            /** The low score label used for the `rating_min_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_min_label?: string;
            /** The high score label used for the `rating_max_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_max_label?: string;
        }[];
    };
    /** Whether the **Show in the browser when the meeting ends** option is enabled. 
* `true` - Enabled. 
* `false` - Disabled. 

 This value defaults to `true`. */
    show_in_the_browser?: boolean;
    /** The link to the third party meeting survey. */
    third_party_survey?: string;
};

/** Update a meeting survey - Request body */
export type ZoomApi$Meeting$Survey$Update$Request = {
    /** Information about the customized meeting survey. */
    custom_survey?: {
        /** The survey's title, up to 64 characters. */
        title?: string;
        /** Allow participants to anonymously answer survey questions. 

 This value defaults to `true`. */
        anonymous?: boolean;
        /** Whether to display the number in the question name. 

 This value defaults to `true`. */
        numbered_questions?: boolean;
        /** Whether to display the question type in the question name. 

 This value defaults to `false`. */
        show_question_type?: boolean;
        /** The survey's feedback, up to 320 characters. 

 This value defaults to `Thank you so much for taking the time to complete the survey. Your feedback really makes a difference.`. */
        feedback?: string;
        /** Information about the meeting survey's questions. */
        questions?: {
            /** The survey question, up to 420 characters. */
            name?: string;
            /** The survey's question and answer type.
             * `single` - Single choice.
             * `multiple` - Multiple choice.
             * `matching` - Matching.
             * `rank_order` - Rank order
             * `short_answer` - Short answer
             * `long_answer` - Long answer.
             * `fill_in_the_blank` - Fill in the blank
             * `rating_scale` - Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
            /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

 This value defaults to `false`. */
            answer_required?: boolean;
            /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

 This value defaults to `false`. */
            show_as_dropdown?: boolean;
            /** The survey question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` questions, you can only provide a maximum of 50 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
            answers?: string[];
            /** Information about the prompt questions. This field only applies to `matching` and `rank_order` questions. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
            }[];
            /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` questions. You must provide at least a **one** character minimum value. */
            answer_min_character?: number;
            /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` questions.
             * For `short_answer` question, a maximum of 500 characters.
             * For `long_answer` question, a maximum of 2,000 characters. */
            answer_max_character?: number;
            /** The rating scale's minimum value. This value cannot be less than zero. 

 This field only applies to the `rating_scale` survey. */
            rating_min_value?: number;
            /** The rating scale's maximum value, up to a maximum value of 10. 

 This field only applies to the `rating_scale` survey. */
            rating_max_value?: number;
            /** The low score label used for the `rating_min_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_min_label?: string;
            /** The high score label used for the `rating_max_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_max_label?: string;
        }[];
    };
    /** Whether the **Show in the browser when the meeting ends** option is enabled. 
* `true` - Enabled. 
* `false` - Disabled. 

 This value defaults to `true`. */
    show_in_the_browser?: boolean;
    /** The link to the third party meeting survey. */
    third_party_survey?: string;
};

/** Create a meeting template from an existing meeting - Request body */
export type ZoomApi$Meeting$Template$Create$Request = {
    /** The meeting ID - the meeting number in long (int64) format. */
    meeting_id?: number;
    /** The template name. */
    name?: string;
    /** If the field is set to `true`, the recurrence meeting template will be saved as the scheduled meeting. */
    save_recurrence?: boolean;
    /** Overwrite an existing meeting template if the template is created from same existing meeting. */
    overwrite?: boolean;
};

/** Create a meeting template from an existing meeting - Response */
export type ZoomApi$Meeting$Template$Create$Response = {
    /** The template ID. */
    id?: string;
    /** The template name. */
    name?: string;
};

/** Get meeting's token - Query parameters */
export type ZoomApi$Meeting$Token$Params = Partial<{
    /** The meeting token type. 
* `closed_caption_token` - The third-party closed caption API token. 

This defaults to `closed_caption_token`. */
    type: 'closed_caption_token';
}>;

/** Get meeting's token - Response */
export type ZoomApi$Meeting$Token$Response = {
    /** The generated meeting token. */
    token?: string;
};

/** Update a meeting - Query parameters */
export type ZoomApi$Meeting$Update$Params = Partial<{
    /** Meeting occurrence ID. Support change of agenda, `start_time`, duration, or settings {`host_video`, `participant_video`, `join_before_host`, `mute_upon_entry`, `waiting_room`, `watermark`, `auto_recording`}. */
    occurrence_id: string;
}>;

/** Update a meeting - Request body */
export type ZoomApi$Meeting$Update$Request = {
    /** Meeting description. */
    agenda?: string;
    /** The meeting's scheduled duration, in minutes. This field is used for type `2` scheduled meetings and type `8` recurring meetings with a fixed time. The value must be between 1 and 1440 minutes, which equates to 24 hours. */
    duration?: number;
    /** The passcode required to join the meeting. By default, a passcode can **only** have a maximum length of 10 characters and only contain alphanumeric characters and the `@`, `-`, `_`, and `*` characters.

**Note**
* If the account owner or administrator has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode **must** meet those requirements. 
* If passcode requirements are enabled, use the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API or the [**Get account settings**](/docs/api/accounts/#tag/accounts/GET/accounts/{accountId}/settings) API to get the requirements.
* If the **Require a passcode when scheduling new meetings** account setting is enabled and locked, a passcode will be automatically generated if one is not provided. */
    password?: string;
    /** Whether to create a prescheduled meeting through the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This **only** supports the meeting `type` value of `2` - scheduled meetings- and `3` - recurring meetings with no fixed time.
     * `true` - Create a prescheduled meeting.
     * `false` - Create a regular meeting. */
    pre_schedule?: boolean;
    /** The email address or `userId` of the user to schedule a meeting for. */
    schedule_for?: string;
    /** Recurrence object. Use this object only for a meeting with type `8`, a recurring meeting with fixed time.  */
    recurrence?: {
        /** Select the final date when the meeting recurs before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Cannot be used with `end_times`. */
        end_date_time?: string;
        /** Select how many times the meeting should recur before it is canceled. If `end_times` is set to 0, it means there is no end time. The maximum number of recurrences is 60. Cannot be used with `end_date_time`. */
        end_times?: number;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state the day in a month when the meeting should recur. The value range is from 1 to 31.

For instance, if the meeting should recur on 23rd of each month, provide `23` as this field's value and `1` as the `repeat_interval` field's value. If the meeting should recur every three months on 23rd of the month, change the `repeat_interval` field's value to `3`. */
        monthly_day?: number;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** Use this field only if you're scheduling a recurring meeting of type `3` to state a specific day in a week when a monthly meeting should recur. To use this field, you must also use the `monthly_week` field. 

  
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** Define the interval when the meeting should recur. For instance, to schedule a meeting that recurs every two months, set this field's value as `2` and the `type` parameter's value to `3`. 

For a daily meeting, the maximum interval is `99` days. For a weekly meeting, the maximum interval is `50` weeks. For a monthly meeting, the maximum value is `10` months.

 */
        repeat_interval?: number;
        /** Recurrence meeting types. 
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** This field is required if you're scheduling a recurring meeting of type `2`, to state which days of the week the meeting should repeat.   

Thiw field's value could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `1` as this field's value.  
   
  **Note** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `1,3` as this field's value.

   
 `1`  - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    /** Meeting settings. */
    settings?: {
        /** Allow attendees to join the meeting from multiple devices. This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting). */
        allow_multiple_devices?: boolean;
        /** A semicolon-separated list of the meeting's alternative hosts' email addresses or IDs. */
        alternative_hosts?: string;
        /** Flag to determine whether to send email notifications to alternative hosts, default value is true. */
        alternative_hosts_email_notification?: boolean;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** Whether to allow an alternative host to manage meeting summaries. */
        alternative_host_manage_meeting_summary?: boolean;
        /** Whether to allow an alternative host to manage meeting cloud recordings. */
        alternative_host_manage_cloud_recording?: boolean;
        /** Enable registration and set approval for the registration. Note that this feature requires the host to be of **Licensed** user type. **Registration cannot be enabled for a basic user.**   
   
 

`0` - Automatically approve.  
 `1` - Manually approve.  
 `2` - No registration required. */
        approval_type?: 0 | 1 | 2;
        /** Approve or block users from specific regions or countries from joining this meeting.
         */
        approved_or_denied_countries_or_regions?: {
            /** List of countries or regions from where participants can join this meeting.  */
            approved_list?: string[];
            /** List of countries or regions from where participants can not join this meeting.  */
            denied_list?: string[];
            /** `true` - Setting enabled to either allow users or block users from specific regions to join your meetings.
 

`false` - Setting disabled. */
            enable?: boolean;
            /** Specify whether to allow users from specific regions to join this meeting, or block users from specific regions from joining this meeting.

 
`approve` - Allow users from specific regions or countries to join this meeting. If this setting is selected, include the approved regions or countries in the `approved_list`.  


`deny` - Block users from specific regions or countries from joining this meeting. If this setting is selected, include the approved regions orcountries in the `denied_list` */
            method?: 'approve' | 'deny';
        };
        /** Determine how participants can join the audio portion of the meeting.  
 `both` - Both Telephony and VoIP.  
 `telephony` - Telephony only.  
 `voip` - VoIP only.  
 `thirdParty` - Third party audio conference. */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference info. */
        audio_conference_info?: string;
        /** If user has configured [Sign Into Zoom with Specified Domains](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated. */
        authentication_domains?: string;
        /** The participants added here will receive unique meeting invite links and bypass authentication. */
        authentication_exception?: {
            /** The participant's email address. */
            email?: string;
            /** The participant's name. */
            name?: string;
            /** URL for participants to join the meeting */
            join_url?: string;
        }[];
        /** Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f). */
        authentication_name?: string;
        /** Meeting authentication option ID. */
        authentication_option?: string;
        /** Automatic recording. 
 `local` - Record on local.  
 `cloud` -  Record on cloud.  
 `none` - Disabled. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Automatically add meeting recordings to a video channel in video management. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        auto_add_recording_to_video_management?: {
            /** Whether to automatically add the meeting recording to video management. */
            enable: boolean;
            /** List of video management channels where the meeting recording will be added. */
            channels?: {
                /** The unique ID of a video management channel. */
                channel_id: string;
                /** The video management channel's name. */
                name?: string;
            }[];
        };
        /** Setting to [pre-assign breakout rooms](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4). */
        breakout_room?: {
            /** Set this field's value to `true` to enable the [breakout room pre-assign](https://support.zoom.us/hc/en-us/articles/360032752671-Pre-assigning-participants-to-breakout-rooms#h_36f71353-4190-48a2-b999-ca129861c1f4) option. */
            enable?: boolean;
            /** Create room(s). */
            rooms?: {
                /** The breakout room's name. */
                name?: string;
                /** Email addresses of the participants who are to be assigned to the breakout room. */
                participants?: string[];
            }[];
        };
        /** The type of calendar integration used to schedule the meeting. 
* `1` - [Zoom Outlook add-in](https://support.zoom.us/hc/en-us/articles/360031592971-Getting-started-with-Outlook-plugin-and-add-in) 
* `2` - [Zoom for Google Workspace add-on](https://support.zoom.us/hc/en-us/articles/360020187492-Using-the-Zoom-for-Google-Workspace-add-on)

Works with the `private_meeting` field to determine whether to share details of meetings. */
        calendar_type?: 1 | 2;
        /** Close registration after the event date. */
        close_registration?: boolean;
        /** Host the meeting in China. */
        cn_meeting?: boolean;
        /** Contact email for registration. */
        contact_email?: string;
        /** Contact name for registration. */
        contact_name?: string;
        /** Custom keys and values assigned to the meeting. */
        custom_keys?: {
            /** Custom key associated with the user. */
            key?: string;
            /** Value of the custom key associated with the user. */
            value?: string;
        }[];
        /** Whether to send email notifications to [alternative hosts](https://support.zoom.us/hc/en-us/articles/208220166) and [users with scheduling privileges](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege). This value defaults to `true`. */
        email_notification?: boolean;
        /** Choose between enhanced encryption and [end-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871) when starting or a meeting. When using end-to-end encryption, several features such cloud recording and phone/SIP/H.323 dial-in, will be **automatically disabled**.   

`enhanced_encryption` - Enhanced encryption. Encryption is stored in the cloud if you enable this option.   
 

`e2ee` - [End-to-end encryption](https://support.zoom.us/hc/en-us/articles/360048660871). The encryption key is stored in your local device and can not be obtained by anyone else. Enabling this setting also **disables** the features join before host, cloud recording, streaming, live transcription, breakout rooms, polling, 1:1 private chat, and meeting reactions. */
        encryption_type?: 'enhanced_encryption' | 'e2ee';
        /** Only signed in users can join this meeting.

**This field is deprecated and will not be supported in the future.**    
   
 As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting. */
        enforce_login?: boolean;
        /** Only signed in users with specified domains can join meetings.

**This field is deprecated and will not be supported in the future.**    
   
 As an alternative, use the `meeting_authentication`, `authentication_option`. and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the meeting. */
        enforce_login_domains?: string;
        /** Whether the [**Focus Mode** feature](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) is enabled when the meeting starts. */
        focus_mode?: boolean;
        /** List of global dial-in countries */
        global_dial_in_countries?: string[];
        /** Global dial-in countries or regions */
        global_dial_in_numbers?: {
            /** City of the number, if any, such as Chicago. */
            city?: string;
            /** Country code, such as BR. */
            country?: string;
            /** Full name of country, such as Brazil. */
            country_name?: string;
            /** Phone number, such as +1 2332357613. */
            number?: string;
            /** Type of number.  */
            type?: 'toll' | 'tollfree';
        }[];
        /** Start video when the host joins the meeting. */
        host_video?: boolean;
        /** Host meeting in India. */
        in_meeting?: boolean;
        /** If the value of `join_before_host` field is set to true, use this field to indicate time limits for a participant to join a meeting before a host.

*  `0` - Allow participant to join anytime.
*  `5` - Allow participant to join 5 minutes before meeting start time.
 * `10` - Allow participant to join 10 minutes before meeting start time.
 * `15` - Allow participant to join 15 minutes before meeting start time. */
        jbh_time?: 0 | 5 | 10 | 15;
        /** Allow participants to join the meeting before the host starts the meeting. Only used for scheduled or recurring meetings. */
        join_before_host?: boolean;
        /** [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for meeting. */
        question_and_answer?: {
            /** * `true` - Enable [Q&amp;A](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065237) for meeting.

* `false` - Disable Q&amp;A for meeting. */
            enable?: boolean;
            /** * `true`: Allow participants to submit questions.

* `false`: Do not allow submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists..

* `false` - Do not allow anonymous questions.(Not supported for simulive meeting.) */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want attendees to be able to view answered questions only or view all questions.

* `answered` - Attendees are able to view answered questions only.

*  `all` - Attendees are able to view all questions submitted in the Q&amp;A. */
            question_visibility?: 'answered' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can not answer questions or leave a comment in the question thread */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can click the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can not click the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
        };
        /** The meeting's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details.

**Note:** This feature is only available for certain Meeting add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the meeting. */
            enable?: boolean;
            /** Information about the meeting's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The meeting's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the meeting. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the meeting. */
            enable?: boolean;
            /** Information about the meeting's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/api-reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** `true`- Only authenticated users can join meetings. */
        meeting_authentication?: boolean;
        /** A list of the meeting's invitees. */
        meeting_invitees?: {
            /** The invitee's email address. */
            email?: string;
        }[];
        /** Mute participants upon entry. */
        mute_upon_entry?: boolean;
        /** Start video when participants join the meeting. */
        participant_video?: boolean;
        /** Whether the meeting is set as private. */
        private_meeting?: boolean;
        /** Whether to send registrants an email confirmation.
         * `true` - Send a confirmation email.
         * `false` - Do not send a confirmation email. */
        registrants_confirmation_email?: boolean;
        /** Whether to send registrants email notifications about their registration approval, cancellation, or rejection.

* `true` - Send an email notification.
* `false` - Do not send an email notification.

 Set this value to `true` to also use the `registrants_confirmation_email` parameter. */
        registrants_email_notification?: boolean;
        /** Registration type. Used for recurring meeting with fixed time only.
 `1` - Attendees register once and can attend any of the occurrences.  
 `2` - Attendees need to register for each occurrence to attend.  
 `3` - Attendees register once and can choose one or more occurrences to attend. */
        registration_type?: 1 | 2 | 3;
        /** Show social share buttons on the meeting registration page.
This setting only works for meetings that require [registration](https://support.zoom.us/hc/en-us/articles/211579443-Setting-up-registration-for-a-meeting). */
        show_share_button?: boolean;
        /** Whether to use a [Personal Meeting ID (PMI)](/docs/api/using-zoom-apis/#understanding-personal-meeting-id-pmi) for the meeting. This field is only used for scheduled meetings(`2`) and recurring meetings with no fixed time(`3`). */
        use_pmi?: boolean;
        /** Enable waiting room. */
        waiting_room?: boolean;
        /** Configuration settings for the meeting's waiting room. */
        waiting_room_options?: {
            /** Specifies the waiting room behavior for this meeting.
             * `follow_setting` - Use the Zoom web portal setting.
             * `custom` - Specify which participants should go into the waiting room. */
            mode: 'follow_setting' | 'custom';
            /** Specifies which participants should be placed into the waiting room. Required if `mode` is set to `custom`.
             * `everyone` - Everyone.
             * `users_not_in_account` - Users not in your account.
             * `users_not_in_account_or_whitelisted_domains` - Users who are not in your account and not part of your whitelisted domains.
             * `users_not_on_invite` - Users not on the meeting invite. */
            who_goes_to_waiting_room?:
                | 'everyone'
                | 'users_not_in_account'
                | 'users_not_in_account_or_whitelisted_domains'
                | 'users_not_on_invite';
        };
        /** Add a watermark when viewing a shared screen. */
        watermark?: boolean;
        /** Whether the **Allow host to save video order** feature is enabled. */
        host_save_video_order?: boolean;
        /** Whether to set the meeting as an internal meeting. */
        internal_meeting?: boolean;
        /** Information about the **Enable continuous meeting chat** feature. This setting only applies to scheduled and recurring meetings, type `2`, `3`, and `8`. It is **not supported** for type `1` instant meetings or type `10` screen share only meetings. */
        continuous_meeting_chat?: {
            /** Whether to enable the **Enable continuous meeting chat** setting. */
            enable?: boolean;
            /** Whether to enable the **Automatically add invited external users** setting. */
            auto_add_invited_external_users?: boolean;
            /** Whether to enable the **Automatically add meeting participants** setting. */
            auto_add_meeting_participants?: boolean;
        };
        /** Whether to set the meeting as a participant focused meeting. */
        participant_focused_meeting?: boolean;
        /** Whether to push meeting changes to the calendar. 

 To enable this feature, configure the **Configure Calendar and Contacts Service** in the user's profile page of the Zoom web portal and enable the **Automatically sync Zoom calendar events information bi-directionally between Zoom and integrated calendars.** setting in the **Settings** page of the Zoom web portal.
* `true` - Push meeting changes to the calendar.
* `false` - Do not push meeting changes to the calendar. */
        push_change_to_calendar?: boolean;
        /** The meeting's resources. */
        resources?: {
            /** The resource type. */
            resource_type?: 'whiteboard';
            /** The resource ID. */
            resource_id?: string;
            /** The permission levels for users to access the whiteboard.
             * `editor` - Users with link access can edit the board.
             * `commenter` - Users with link access can comment on the board.
             * `viewer` - Users with link access can view the board. */
            permission_level?: 'editor' | 'commenter' | 'viewer';
        }[];
        /** Whether to automatically start meeting summary. */
        auto_start_meeting_summary?: boolean;
        /** Defines who will receive a summary after this meeting. This field is applicable only when `auto_start_meeting_summary` is set to `true`.
         * `1` - Only meeting host.
         * `2` - Only meeting host, co-hosts, and alternative hosts.
         * `3` - Only meeting host and meeting invitees in our organization.
         * `4` - All meeting invitees including those outside of our organization. */
        who_will_receive_summary?: 1 | 2 | 3 | 4;
        /** Whether to automatically start AI Companion questions. */
        auto_start_ai_companion_questions?: boolean;
        /** Defines who can ask questions about this meeting's transcript. This field is applicable only when `auto_start_ai_companion_questions` is set to `true`.
         * `1` - All participants and invitees.
         * `2` - All participants only from when they join.
         * `3` - Only meeting host.
         * `4` - Participants and invitees in our organization.
         * `5` - Participants in our organization only from when they join. */
        who_can_ask_questions?: 1 | 2 | 3 | 4 | 5;
        /** The summary template ID used to generate a meeting summary based on a predefined template. To get available summary templates, use the **Get user summary templates** API. To enable this feature for your account, please [contact Zoom Support](https://support.zoom.com/hc/en). */
        summary_template_id?: string;
        /** Enable the device testing. */
        device_testing?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and co-hosts to fully control the mute state of participants. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to disable the participant video during a meeting. To enable this feature for your account, [contact Zoom Support](https://support.zoom.us/hc/en-us). */
        disable_participant_video?: boolean;
        /** Whether to include authenticated guest's email addresses in meetings' attendee reports. */
        email_in_attendee_report?: boolean;
    };
    /** Meeting start time. When using a format like `yyyy-MM-dd'T'HH:mm:ss'Z'`, always use GMT time. When using a format like `yyyy-MM-dd'T'HH:mm:ss`, use local time and specify the time zone. Only used for scheduled meetings and recurring meetings with a fixed time. */
    start_time?: string;
    /** Unique identifier of the meeting template. 

[Schedule the meeting from a meeting template](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates#h_86f06cff-0852-4998-81c5-c83663c176fb). Retrieve this field's value by calling the [List meeting templates](/docs/api/rest/reference/zoom-api/methods/#operation/listMeetingTemplates) API. */
    template_id?: string;
    /** The timezone to assign to the `start_time` value. Only use this field for scheduled or recurring meetings with a fixed time.

For a list of supported timezones and their formats, see our [timezone list](/docs/api/references/abbreviations/#timezones). */
    timezone?: string;
    /** Meeting topic. */
    topic?: string;
    /** Tracking fields. */
    tracking_fields?: {
        /** Tracking fields type. */
        field?: string;
        /** Tracking fields value. */
        value?: string;
    }[];
    /** The type of meeting.
     * `1` - An instant meeting.
     * `2` - A scheduled meeting.
     * `3` - A recurring meeting with no fixed time.
     * `8` - A recurring meeting with fixed time.
     * `10` - A screen share only meeting. */
    type?: 1 | 2 | 3 | 8 | 10;
};

/** Delete a meeting registrant - Query parameters */
export type ZoomApi$Meetingregistrantdelete$Params = Partial<{
    /** The meeting occurrence ID. */
    occurrence_id: string;
}>;

/** List meetings - Query parameters */
export type ZoomApi$Meetings$Params = Partial<{
    /** The type of meeting.
     * `scheduled` - All valid previous (unexpired) meetings, live meetings, and upcoming scheduled meetings.
     * `live` - All the ongoing meetings.
     * `upcoming` - All upcoming meetings, including live meetings.
     * `upcoming_meetings` - All upcoming meetings, including live meetings.
     * `previous_meetings` - All the previous meetings. */
    type:
        | 'scheduled'
        | 'live'
        | 'upcoming'
        | 'upcoming_meetings'
        | 'previous_meetings';
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The page number of the current page in the returned records. */
    page_number: number;
    /** The start date. */
    from: string;
    /** The end date. */
    to: string;
    /** The timezone to assign to the `from` and `to` value. For a list of supported timezones and their formats, see our [timezone list](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#timezones). */
    timezone: string;
}>;

/** List meetings - Response */
export type ZoomApi$Meetings$Response = {
    /** Use the next page token to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** The page number of the current results. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** List of meeting objects. */
    meetings?: {
        /** Meeting description. The length of agenda gets truncated to 250 characters when you list all of a user's meetings. To view a meeting's complete agenda, or to retrieve details for a single meeting, use the [**Get a meeting**](/docs/api-reference/zoom-api/methods#operation/meeting) API. */
        agenda?: string;
        /** Time of creation. */
        created_at?: string;
        /** Meeting duration. */
        duration?: number;
        /** ID of the user who is set as the meeting's host. */
        host_id?: string;
        /** Meeting ID - also known as the meeting number in long (int64) format. */
        id?: number;
        /** URL using which participants can join a meeting. */
        join_url?: string;
        /** [Personal meeting ID](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi). This field is only returned if PMI was used to schedule the meeting. */
        pmi?: string;
        /** Meeting start time. */
        start_time?: string;
        /** Timezone to format the meeting start time.  */
        timezone?: string;
        /** Meeting topic. */
        topic?: string;
        /** Meeting types.  
 `1` - Instant meeting.  
 `2` - Scheduled meeting.  
 `3` - Recurring meeting with no fixed time.  
 `8` - Recurring meeting with fixed time. */
        type?: 1 | 2 | 3 | 8;
        /** Unique Meeting ID. Each meeting instance will generate its own Meeting UUID. */
        uuid?: string;
    }[];
};

/** Get past meeting details - Response */
export type ZoomApi$Past$Meeting$Details$Response = {
    /** The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID). */
    id?: number;
    /** The meeting's UUID. You must [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) this value if the meeting UUID begins with a `/` character or contains the `//` character. */
    uuid?: string;
    /** The meeting's duration, in minutes. */
    duration?: number;
    /** The meeting's start date and time. */
    start_time?: string;
    /** The meeting's end date and time. */
    end_time?: string;
    /** The host's ID. */
    host_id?: string;
    /** The meeting host's department. */
    dept?: string;
    /** The number of meeting participants. */
    participants_count?: number;
    /** Whether the meeting was created directly through Zoom or via an API request:
     * If the meeting was created via an OAuth app, this field returns the OAuth app's name.
     * If the meeting was created via JWT or the Zoom Web Portal, this returns the `Zoom` value. */
    source?: string;
    /** The meeting's topic. */
    topic?: string;
    /** The total number of minutes attended by the meeting's host and participants. */
    total_minutes?: number;
    /** The meeting type.
     * `0` - A prescheduled meeting.
     * `1` - An instant meeting.
     * `2` - A scheduled meeting.
     * `3` - A recurring meeting with no fixed time.
     * `4` - A [personal meeting room](https://support.zoom.us/hc/en-us/articles/201362843).
     * `7` - A [PAC (personal audio conference)](https://support.zoom.us/hc/en-us/articles/205172455-Hosting-a-Personal-Audio-Conference-PAC-meeting) meeting.
     * `8` - A recurring meeting with a fixed time. */
    type?: 0 | 1 | 2 | 3 | 4 | 7 | 8;
    /** The user's email address. */
    user_email?: string;
    /** The user's display name. */
    user_name?: string;
    /** Whether the summary feature was used in the meeting. */
    has_meeting_summary?: boolean;
};

/** Get past meeting participants - Query parameters */
export type ZoomApi$Past$Meeting$Participants$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** Get past meeting participants - Response */
export type ZoomApi$Past$Meeting$Participants$Response = {
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** The number of records returned within a single API call. */
    page_size?: number;
    /** The number of all records available across pages. */
    total_records?: number;
} & {
    /** Array of meeting participant objects. */
    participants?: {
        /** Universally unique identifier of the Participant. It is the same as the User ID of the participant if the participant joins the meeting by logging into Zoom. If the participant joins the meeting without logging in, the value of this field will be blank. */
        id?: string;
        /** Participant display name. */
        name?: string;
        /** Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only. */
        user_id?: string;
        /** The participant's unique registrant ID. This field only returns if you pass the `registrant_id` value for the `include_fields` query parameter. 

This field does not return if the `type` query parameter is the `live` value. */
        registrant_id?: string;
        /** Email address of the user. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        user_email?: string;
        /** Participant join time. */
        join_time?: string;
        /** Participant leave time. */
        leave_time?: string;
        /** Participant duration, in seconds, calculated by subtracting the `leave_time` from the `join_time` for the `user_id`. If the participant leaves and rejoins the same meeting, they will be assigned a different `user_id` and Zoom displays their new duration in a separate object. Note that because of this, the duration may not reflect the total time the user was in the meeting. */
        duration?: number;
        /** Indicates if failover happened during the meeting. */
        failover?: boolean;
        /** The participant's status.
         * `in_meeting` - In a meeting.
         * `in_waiting_room` - In a waiting room. */
        status?: 'in_meeting' | 'in_waiting_room';
        /** Whether the meeting participant is an internal user. */
        internal_user?: boolean;
    }[];
};

/** List past meeting instances - Response */
export type ZoomApi$Past$Meetings$Response = {
    /** List of ended meeting instances. */
    meetings?: {
        /** Start time */
        start_time?: string;
        /** Meeting UUID. Unique meeting ID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). [Double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.

 */
        uuid?: string;
    }[];
};

/** List past webinar instances - Response */
export type ZoomApi$Past$Webinars$Response = {
    /** List of ended webinar instances. */
    webinars?: {
        /** Start time. */
        start_time?: string;
        /** Webinar UUID. */
        uuid?: string;
    }[];
};

/** Delete a recording file for a meeting or webinar - Query parameters */
export type ZoomApi$Recording$Delete$One$Params = Partial<{
    /** The recording delete actions. 
 `trash` - Move recording to trash.  
 `delete` - Delete recording permanently. */
    action: 'trash' | 'delete';
}>;

/** Delete meeting or webinar recordings - Query parameters */
export type ZoomApi$Recording$Delete$Params = Partial<{
    /** The recording delete actions.  
 `trash` - Move recording to trash.  
 `delete` - Delete recording permanently. */
    action: 'trash' | 'delete';
}>;

/** Get meeting recordings - Query parameters */
export type ZoomApi$Recording$Get$Params = Partial<{
    /** Include fields in the response. Currently, only accepts `download_access_token` to get this token field and value for downloading the meeting's recordings. The `download_access_token` requires **View the recording content** enabled for the role authorizing the account. Use the format `include_fields=download_access_token`. */
    include_fields: string;
    /** The `download_access_token` Time to Live (TTL) value. This parameter is only valid if the `include_fields` query parameter contains the value `download_access_token`. */
    ttl: number;
}>;

/** Get meeting recordings - Response */
export type ZoomApi$Recording$Get$Response = {
    /** The user account's unique identifier. */
    account_id?: string;
    /** The duration of the meeting's recording. */
    duration?: number;
    /** The ID of the user set as the host of the meeting. */
    host_id?: string;
    /** The meeting ID, also known as the meeting number. */
    id?: number;
    /** The number of recording files returned in the response of this API call. This includes the `recording_files` and  `participant_audio_files` files. */
    recording_count?: number;
    /** The time when the meeting started. */
    start_time?: string;
    /** The meeting topic. */
    topic?: string;
    /** The recording's total file size. This includes the `recording_files` and `participant_audio_files` files. */
    total_size?: number;
    /** The recording's associated type of meeting or webinar. 

If the recording is of a meeting: 
* `1` - Instant meeting. 
* `2` - Scheduled meeting. 
* `3` - A recurring meeting with no fixed time. 
* `4` - A meeting created via PMI (Personal Meeting ID). 
* `7` - A [Personal Audio Conference](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060449) (PAC). 
* `8` - Recurring meeting with a fixed time. 

If the recording is of a webinar: 
* `5` - A webinar. 
* `6` - A recurring webinar without a fixed time 
* `9` - A recurring webinar with a fixed time.

If the recording is **not** from a meeting or webinar: 

* `99` - A recording uploaded via the [**Recordings**](https://zoom.us/recording) interface on the Zoom Web Portal. */
    type?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '99';
    /** The unique meeting identifier. Each instance of the meeting has its own UUID. */
    uuid?: string;
    /** The cloud recording's passcode to be used in the URL. Directly splice this recording's passcode in `play_url` or `share_url` with `?pwd=` to access and play. Example: 'https://zoom.us/rec/share/**************?pwd=yNYIS408EJygs7rE5vVsJwXIz4-VW7MH'. */
    recording_play_passcode?: string;
    /** Auto-delete status of a meeting's [cloud recording](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062627).  

Prerequisite: To get the auto-delete status, the host of the recording must have the recording setting **Delete cloud recordings after a specified number of days** enabled.  */
    auto_delete?: boolean;
    /** The date when the recording will be auto-deleted when `auto_delete` is true. Otherwise, no date will be returned. */
    auto_delete_date?: string;
} & {
    /** List of recording files. */
    recording_files?: {
        /** The time when the recording was deleted. Returned in the response only for the trash query. */
        deleted_time?: string;
        /** The URL to download the recording. 

If a user has authorized and installed your OAuth app that contains recording scopes, use the `download_access_token` or the user's [OAuth access token](/docs/integrations/oauth/) to download the file. Set the `access_token` as a Bearer token in the Authorization header. For example: 

`curl -H 'Authorization: Bearer <ACCESS_TOKEN>' https://{{base-domain}}/rec/archive/download/xyz`.

**Note:** This field does **not** return for Zoom on-premise accounts. Instead, this API returns the `file_path` field. The URL may be a redirect. In that case, use `curl --location` to follow redirects or use another tool, like Postman. */
        download_url?: string;
        /** The file path to the on-premise account recording. 

**Note:** This API only returns this field for Zoom On-Premise accounts. It does **not** return the `download_url` field. */
        file_path?: string;
        /** The recording file size. */
        file_size?: number;
        /** The recording file type. 
 
`MP4` - Video file of the recording.  
 `M4A` - Audio-only file of the recording.  
 `TIMELINE` - Timestamp file of the recording in JSON file format. To get a timeline file, the **Add a timestamp to the recording** setting must be enabled in the [recording settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062627#h_3f14c3a4-d16b-4a3c-bbe5-ef7d24500048). The time will display in the host's timezone, set on their Zoom profile.
  
  `TRANSCRIPT` - Transcription file of the recording in VTT format.  
  `CHAT` - A TXT file containing in-meeting chat messages that were sent during the meeting.  
 `CC` - File containing closed captions of the recording in VTT file format.  
 `CSV` - File containing polling data in csv format.

  
 

A recording file object with file type of either `CC` or `TIMELINE` **does not have** these properties.  
 
	`id`, `status`, `file_size`, `recording_type`, and `play_url`.  
 `SUMMARY` - Summary file of the recording in JSON file format. */
        file_type?:
            | 'MP4'
            | 'M4A'
            | 'CHAT'
            | 'TRANSCRIPT'
            | 'CSV'
            | 'TB'
            | 'CC'
            | 'CHAT_MESSAGE'
            | 'SUMMARY';
        /** The file extension type of the recording file. */
        file_extension?: 'MP4' | 'M4A' | 'TXT' | 'VTT' | 'CSV' | 'JSON' | 'JPG';
        /** The recording file ID. It's included in the response of the general query. */
        id?: string;
        /** The meeting ID.  */
        meeting_id?: string;
        /** The URL that can play a recording file. */
        play_url?: string;
        /** The recording end time. The response is in the general query. */
        recording_end?: string;
        /** The recording start time. */
        recording_start?: string;
        /** The recording type. */
        recording_type?:
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
        /** The recording status. */
        status?: 'completed';
    }[];
} & {
    /** The JWT token to download the meeting's recording. This response only returns if the `download_access_token` is included in the `include_fields` query parameter. */
    download_access_token?: string;
    /** The cloud recording's password.
Include fields in the response. The password field requires the user role of the authorized account to enable the `View Recording Content` permission. */
    password?: string;
    /** The cloud recording's passcode to be used in the URL. Directly splice this recording's passcode in `play_url` or `share_url` with `?pwd=` to access and play. Example: 'https://zoom.us/rec/share/**************?pwd=yNYIS408EJygs7rE5vVsJwXIz4-VW7MH'. */
    recording_play_passcode?: string;
} & {
    /** A list of recording files. The API only returns this response when the **Record a separate audio file of each participant** setting is enabled. */
    participant_audio_files?: {
        /** The URL to download the recording. If a user has authorized and installed your OAuth app that contains recording scopes, use the user's [OAuth access token](/docs/integrations/oauth/) to download the file, and set the `access_token` as a Bearer token in the Authorization header.

`curl -H 'Authorization: Bearer <ACCESS_TOKEN>' https://{{base-domain}}/rec/archive/download/xyz` 

**Note:** This field does **not** return for Zoom On-Premise accounts. Instead, this API will return the `file_path` field. */
        download_url?: string;
        /** The recording file's name. */
        file_name?: string;
        /** The file path to the on-premise account recording. 

**Note:** This API only returns this field for Zoom on-premise accounts. It does **not** return the `download_url` field. */
        file_path?: string;
        /** The recording file's size, in bytes. */
        file_size?: number;
        /** The recording file's format. 

* `MP4` - Video file.
* `M4A` - Audio-only file.
* `TIMELINE` - Timestamp file of the recording, in JSON file format. To get a timeline file, the **Add a timestamp to the recording** setting **must** be enabled in the [recording settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062627#h_3f14c3a4-d16b-4a3c-bbe5-ef7d24500048). The time will display in the host's timezone.
* `TRANSCRIPT` - A transcript of the recording, in VTT format.
* `CHAT` - A text file containing chat messages sent during the meeting.
* `CC` - A file containing the closed captions of the recording, in VTT file format.
* `CSV` - A file containing polling data, in CSV format.

A recording file object with file the `CC` or `TIMELINE` value **does not** have the `id`, `status`, `file_size`, `recording_type`, and `play_url` properties. */
        file_type?: string;
        /** The recording file's unique ID. This is included in the general query response. */
        id?: string;
        /** The URL where the recording file can be opened and played. */
        play_url?: string;
        /** The recording file's end time. This is included in the general query response. */
        recording_end?: string;
        /** The recording file's start time. */
        recording_start?: string;
        /** The recording file's status. */
        status?: 'completed';
    }[];
};

/** Update registration questions - Request body */
export type ZoomApi$Recording$Registrant$Question$Update$Request = {
    /** Array of registrant custom questions. */
    custom_questions?: {
        /** Answer choices for the question. Cannot be used with short answer type. */
        answers?: string[];
        /** Whether registrants are required to answer custom questions or not. */
        required?: boolean;
        /** The question's title. */
        title?: string;
        /** The type of registration question and answers. */
        type?: 'short' | 'single' | 'multiple';
    }[];
    /** Array of registrant questions. */
    questions?: {
        /** Field name. */
        field_name?:
            | 'last_name'
            | 'address'
            | 'city'
            | 'country'
            | 'zip'
            | 'state'
            | 'phone'
            | 'industry'
            | 'org'
            | 'job_title'
            | 'purchasing_time_frame'
            | 'role_in_purchase_process'
            | 'no_of_employees'
            | 'comments';
        /** Whether the field is required to be answered by the registrant or not. */
        required?: boolean;
    }[];
};

/** Get registration questions - Response */
export type ZoomApi$Recording$Registrants$Questions$Get$Response = {
    /** Array of registrant custom questions. */
    custom_questions?: {
        /** Answer choices for the question. Cannot be used with short answer type. */
        answers?: string[];
        /** Whether registrants are required to answer custom questions or not. */
        required?: boolean;
        /** The question's title. */
        title?: string;
        /** The type of registration question and answers. */
        type?: 'short' | 'single' | 'multiple';
    }[];
    /** Array of registrant questions. */
    questions?: {
        /** Field name. */
        field_name?:
            | 'last_name'
            | 'address'
            | 'city'
            | 'country'
            | 'zip'
            | 'state'
            | 'phone'
            | 'industry'
            | 'org'
            | 'job_title'
            | 'purchasing_time_frame'
            | 'role_in_purchase_process'
            | 'no_of_employees'
            | 'comments';
        /** Whether the field is required to be answered by the registrant or not. */
        required?: boolean;
    }[];
};

/** Get meeting recording settings - Response */
export type ZoomApi$Recording$Setting$Update$Response = {
    /** The registration approval type.  
 
`0` - Automatically approve the registration when a user registers.  
 
`1` - Manually approve or deny the registration of a user.  
 
`2` - No registration required to view the recording. */
    approval_type?: 0 | 1 | 2;
    /** The domains for authentication. */
    authentication_domains?: string;
    /** The options for authentication. */
    authentication_option?: string;
    /** The name for authentication. */
    authentication_name?: string;
    /** This field determines whether registration is required to view the recording. */
    on_demand?: boolean;
    /** This field enables passcode protection for the recording by setting a passcode. The passcode must have a minimum of **eight** characters with a mix of numbers, letters and special characters.  
   
 
**Note:** If the account owner or the admin has set minimum passcode strength requirements for recordings through Account Settings, the passcode value provided here must meet those requirements.   
   
 If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/api-reference/zoom-api/ma#operation/accountSettings) API. */
    password?: string;
    /** Only allow authenticated users to view. */
    recording_authentication?: boolean;
    /** Enable sending an email to the host when someone registers to view the recording. This applies for On-demand recordings only. */
    send_email_to_host?: boolean;
    /** Determine how the meeting recording is shared. */
    share_recording?: 'publicly' | 'internally' | 'none';
    /** Show social share buttons on the registration page. This applies for On-demand recordings only. */
    show_social_share_buttons?: boolean;
    /** The recording's name. */
    topic?: string;
    /** Determine whether a viewer can download the recording file or not. */
    viewer_download?: boolean;
    /** Auto-delete status of a meeting's [cloud recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).  

Prerequisite: To get the auto-delete status, the host of the recording must have the recording setting "Delete cloud recordings after a specified number of days" enabled.  */
    auto_delete?: boolean;
    /** The date when the recording will be auto-deleted when `auto_delete` is `true`. Otherwise, no date is returned. */
    auto_delete_date?: string;
};

/** Update meeting recording settings - Request body */
export type ZoomApi$Recording$Settings$Update$Request = {
    /** The approval type for the registration.  
 
`0`- Automatically approve the registration when a user registers.  
 
`1` - Manually approve or deny the registration of a user.  
 
`2` - No registration required to view the recording. */
    approval_type?: 0 | 1 | 2;
    /** The authentication domains. */
    authentication_domains?: string;
    /** The authentication options. */
    authentication_option?: string;
    /** Determine whether the registration is required to view the recording. */
    on_demand?: boolean;
    /** Enable passcode protection for the recording by setting a passcode. 

The passcode must have a minimum of **eight** characters with a mix of numbers, letters and special characters.  
   
 
**Note:** If the account owner or the admin has set minimum passcode strength requirements for recordings through Account Settings, the passcode value provided here must meet those requirements.   
   
 If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/api-reference/zoom-api/ma#operation/accountSettings) API. */
    password?: string;
    /** Indicate that only authenticated users can view. */
    recording_authentication?: boolean;
    /** Send an email to host when someone registers to view the recording. This setting applies for On-demand recordings only. */
    send_email_to_host?: boolean;
    /** Determine how the meeting recording is shared. */
    share_recording?: 'publicly' | 'internally' | 'none';
    /** Show social share buttons on registration page. This setting applies for On-demand recordings only. */
    show_social_share_buttons?: boolean;
    /** The name of the recording. */
    topic?: string;
    /** Determine whether a viewer can download the recording file or not. */
    viewer_download?: boolean;
    /** Update the auto-delete status of a meeting's [cloud recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).  

Prerequisite: To update the auto-delete status, the host of the recording must have the recording setting "Delete cloud recordings after a specified number of days" enabled. */
    auto_delete?: boolean;
};

/** Recover a single recording - Request body */
export type ZoomApi$Recording$Status$Update$One$Request = {
    action?: 'recover';
};

/** Recover meeting recordings - Request body */
export type ZoomApi$Recording$Status$Update$Request = {
    action?: 'recover';
};

/** List all recordings - Query parameters */
export type ZoomApi$Recordings$List$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** The next page token paginates through a large set of results. A next page token returns whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token: string;
    /** The query metadata of the recording if using an on-premise meeting connector for the meeting. */
    mc: string;
    /** The query trash.
* `true` - List recordings from trash.  
* `false` - Do not list recordings from the trash.  

The default value is `false`. If you set it to `true`, you can use the `trash_type` property to indicate the type of Cloud recording that you need to retrieve.  */
    trash: boolean;
    /** The start date in 'yyyy-mm-dd' UTC format for the date range where you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. 

For example, if you make the API request on June 30, 2020, without providing the `from` and `to` parameters, by default the value of 'from' field will be `2020-06-30` and the value of the 'to' field will be `2020-07-01`. 

**Note**: The `trash` files cannot be filtered by date range and thus, the `from` and `to` fields should not be used for trash files. */
    from: string;
    /** The end date in 'yyyy-mm-dd' 'yyyy-mm-dd' UTC format.  */
    to: string;
    /** The type of cloud recording to retrieve from the trash. 
 
 *   `meeting_recordings`: List all meeting recordings from the trash.  
 *  `recording_file`: List all individual recording files from the trash.  */
    trash_type: string;
    /** The meeting ID. */
    meeting_id: number;
}>;

/** List all recordings - Response */
export type ZoomApi$Recordings$List$Response = {
    /** The start date. */
    from?: string;
    /** The end date. */
    to?: string;
} & {
    /** The next page token paginates through a large set of results. A next page token returns whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** The number of records returned within a single API call. */
    page_size?: number;
    /** The number of all records available across pages. */
    total_records?: number;
} & {
    /** List of recordings. */
    meetings?: ({
        /** Unique Identifier of the user account. */
        account_id?: string;
        /** Meeting duration. */
        duration?: number;
        /** ID of the user set as host of meeting. */
        host_id?: string;
        /** Meeting ID - also known as the meeting number. */
        id?: number;
        /** Number of recording files returned in the response of this API call. This includes the `recording_files` and  `participant_audio_files` files. */
        recording_count?: number;
        /** The time when the meeting started. */
        start_time?: string;
        /** Meeting topic. */
        topic?: string;
        /** The total file size of the recording. This includes the `recording_files` and `participant_audio_files` files. */
        total_size?: number;
        /** The recording's associated type of meeting or webinar: 

If the recording is of a meeting: 
* `1` - Instant meeting. 
* `2` - Scheduled meeting. 
* `3` - A recurring meeting with no fixed time. 
* `4` - A meeting created viaPersonal Meeting ID (PMI). 
* `7` - A [Personal Audio Conference](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) (PAC). 
* `8` - Recurring meeting with a fixed time. 

If the recording is of a webinar: 
* `5` - A webinar. 
* `6` - A recurring webinar without a fixed time 
* `9` - A recurring webinar with a fixed time.

If the recording is **not** from a meeting or webinar: 

* `99` - A recording uploaded via the [**Recordings**](https://zoom.us/recording) interface on the Zoom Web Portal. */
        type?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '99';
        /** Unique Meeting Identifier. Each instance of the meeting will have its own UUID. */
        uuid?: string;
        /** The cloud recording's passcode to be used in the URL. 
Include fields in the response. The password field requires the user role of the authorized account to enable the **View Recording Content** permission to be returned.
This recording's passcode can be directly spliced in `play_url` or `share_url` with `?pwd=` to access and play. For example, 'https://zoom.us/rec/share/**************?pwd=yNYIS408EJygs7rE5vVsJwXIz4-VW7MH'. If you want to use this field, please contact Zoom support. */
        recording_play_passcode?: string;
        /** Auto-delete status of a meeting's [cloud recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).  

Prerequisite: To get the auto-delete status, the host of the recording must have the recording setting **Delete cloud recordings after a specified number of days** enabled.  */
        auto_delete?: boolean;
        /** The date when the recording will be auto-deleted when `auto_delete` is `true`. Otherwise, no date will be returned. */
        auto_delete_date?: string;
    } & {
        /** List of recording file. */
        recording_files?: {
            /** The time when recording was deleted. Returned in the response only for trash query. */
            deleted_time?: string;
            /** The URL to download the recording. If a user has authorized and installed your OAuth app that contains recording scopes, use the `download_access_token` or the user's [OAuth access token](https://developers.zoom.us/docs/integrations/oauth/) to download the file. Set the token as a Bearer token in the Authorization header. 

`curl -H 'Authorization: Bearer <ACCESS_TOKEN>' https://{{base-domain}}/rec/archive/download/xyz`. 

**Note:** This field does **not** return for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). Instead, this API will return the `file_path` field. The URL may be a redirect. In that case, use `curl --location` to follow redirects or use another tool, like Postman. */
            download_url?: string;
            /** The file path to the On-Premise account recording. 

**Note:** This API only returns this field for [Zoom On-Premise accounts](https://support.zoom.us/hc/en-us/articles/360034064852-Zoom-On-Premise-Deployment). It does **not** return the `download_url` field. */
            file_path?: string;
            /** The recording file size. */
            file_size?: number;
            /** The recording file type.  
 
`MP4` - Video file of the recording.  
 `M4A` Audio-only file of the recording.  
 `TIMELINE` - Timestamp file of the recording in JSON file format. To get a timeline file, the **Add a timestamp to the recording** setting must be enabled in the [recording settings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-recording#h_3f14c3a4-d16b-4a3c-bbe5-ef7d24500048). The time will display in the host's timezone, set on their Zoom profile.
  
  `TRANSCRIPT` - Transcription file of the recording in VTT format.  
  `CHAT` - A TXT file containing in-meeting chat messages that were sent during the meeting.  
 `CC` - File containing closed captions of the recording in VTT file format.  
 `CSV` - File containing polling data in CSV format.

  
 

A recording file object with file type of either `CC` or `TIMELINE` **does not have** the following properties:  
 
	`id`, `status`, `file_size`, `recording_type`, and `play_url`.  
 `SUMMARY` - Summary file of the recording in JSON file format. */
            file_type?:
                | 'MP4'
                | 'M4A'
                | 'CHAT'
                | 'TRANSCRIPT'
                | 'CSV'
                | 'TB'
                | 'CC'
                | 'CHAT_MESSAGE'
                | 'SUMMARY';
            /** The file extension type of the recording file. */
            file_extension?:
                | 'MP4'
                | 'M4A'
                | 'TXT'
                | 'VTT'
                | 'CSV'
                | 'JSON'
                | 'JPG';
            /** The recording file ID. Included in the response of general query. */
            id?: string;
            /** The meeting ID.  */
            meeting_id?: string;
            /** The URL to play a recording file. */
            play_url?: string;
            /** The recording end time. Response in general query. */
            recording_end?: string;
            /** The recording start time. */
            recording_start?: string;
            /** The recording type.  
 `shared_screen_with_speaker_view(CC)`  
 `shared_screen_with_speaker_view`  
 `shared_screen_with_gallery_view`  
 `active_speaker`  
 `gallery_view`  
 `shared_screen`  
 `audio_only`  
 `audio_transcript`  
 `chat_file`  
 `poll`  
 `timeline`  
 `closed_caption`  
 `audio_interpretation`  
 `summary`  
 `summary_next_steps`  
 `summary_smart_chapters`  
 `sign_interpretation`  
 `production_studio` */
            recording_type?:
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
            /** The recording status. */
            status?: 'completed';
        }[];
    })[];
};

/** Get cloud recording usage report - Query parameters */
export type ZoomApi$Report$Cloud$Recording$Params = Partial<{
    /** Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once. */
    from: string;
    /** End date. */
    to: string;
    /** The group ID. To get a group ID, use the [**List groups**](/api-reference/zoom-api/methods#operation/groups) API. 

 **Note:** The API response will only contain users who are members of the queried group ID. */
    group_id: string;
}>;

/** Get cloud recording usage report - Response */
export type ZoomApi$Report$Cloud$Recording$Response = {
    /** Start date for this report */
    from?: string;
    /** End date for this report */
    to?: string;
} & {
    /** Array of cloud usage objects */
    cloud_recording_storage?: {
        /** Date of the usage */
        date?: string;
        /** Free storage */
        free_usage?: string;
        /** Paid storage */
        plan_usage?: string;
        /** Storage used on the date */
        usage?: string;
    }[];
};

/** Get daily usage report - Query parameters */
export type ZoomApi$Report$Daily$Params = Partial<{
    /** Year for this report */
    year: number;
    /** Month for this report */
    month: number;
    /** The group ID. To get a group ID, use the [**List groups**](/docs/api/users/#tag/groups/GET/groups) API. 

 **Note:** The API response will only contain users who are members of the queried group ID. */
    group_id: string;
}>;

/** Get daily usage report - Response */
export type ZoomApi$Report$Daily$Response = {
    /** Array of date objects. */
    dates?: {
        /** Date for this object. */
        date?: string;
        /** Number of meeting minutes on this date. */
        meeting_minutes?: number;
        /** Number of meetings on this date. */
        meetings?: number;
        /** Number of new users on this date. */
        new_users?: number;
        /** Number of participants on this date. */
        participants?: number;
    }[];
    /** Month for this report. */
    month?: number;
    /** Year for this report. */
    year?: number;
};

/** Get meeting detail reports - Response */
export type ZoomApi$Report$Meeting$Details$Response = {
    /** Custom keys and values assigned to the meeting. */
    custom_keys?: {
        /** Custom key associated with the user. */
        key?: string;
        /** Value of the custom key associated with the user. */
        value?: string;
    }[];
    /** Department of the host. */
    dept?: string;
    /** Meeting duration. */
    duration?: number;
    /** Meeting end time. */
    end_time?: string;
    /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in &quot;**long**&quot; format(represented as int64 data type in JSON), also known as the meeting number. */
    id?: number;
    /** Number of meeting participants. */
    participants_count?: number;
    /** Meeting start time. */
    start_time?: string;
    /** Meeting topic. */
    topic?: string;
    /** Number of meeting minutes. This represents the total amount of meeting minutes attended by each participant including the host, for meetings hosted by the user. For instance if there were one host(named A) and one participant(named B) in a meeting, the value of total_minutes would be calculated as below:

**total_minutes** = Total Meeting Attendance Minutes of A + Total Meeting Attendance Minutes of B */
    total_minutes?: number;
    /** Tracking fields. */
    tracking_fields?: {
        /** Tracking fields type. */
        field?: string;
        /** Tracking fields value. */
        value?: string;
    }[];
    /** Meeting type. */
    type?: number;
    /** User email. */
    user_email?: string;
    /** User display name. */
    user_name?: string;
    /** Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). [Double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it. */
    uuid?: string;
};

/** Get meeting participant reports - Query parameters */
export type ZoomApi$Report$Meeting$Participants$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** Provide `registrant_id` as the value for this field if you would like to see the registrant ID attribute in the response of this API call. A registrant ID is a unique identifier of a [meeting registrant](/docs/api-reference/zoom-api/methods#operation/meetingRegistrants). */
    include_fields: 'registrant_id';
}>;

/** Get meeting participant reports - Response */
export type ZoomApi$Report$Meeting$Participants$Response = {
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** The number of records returned within a single API call. */
    page_size?: number;
    /** The number of all records available across pages. */
    total_records?: number;
} & {
    /** Array of meeting participant objects. */
    participants?: {
        /** The participant's SDK identifier. This value can be alphanumeric, up to a maximum length of 35 characters. */
        customer_key?: string;
        /** Participant duration, in seconds, calculated by subtracting the `leave_time` from the `join_time` for the `user_id`. If the participant leaves and rejoins the same meeting, they are assigned a different `user_id` and Zoom displays their new duration in a separate object. Because of this, the duration may not reflect the total time the user was in the meeting. */
        duration?: number;
        /** Indicates if failover happened during the meeting. */
        failover?: boolean;
        /** The participant's universally unique ID (UUID). 
* If the participant joins the meeting by logging into Zoom, this value is the `id` value in the [**Get a user**](/docs/api-reference/zoom-api/methods#operation/user) API response. 
* If the participant joins the meeting **without** logging into Zoom, this returns an empty string value. 

**Note:** Use the `participant_user_id` value instead of this value. We will remove this response in a future release. */
        id?: string;
        /** Participant join time. */
        join_time?: string;
        /** Participant leave time. */
        leave_time?: string;
        /** Participant display name.

This returns an empty string value if the account calling the API is a BAA account. */
        name?: string;
        /** Unique identifier of the registrant. This field is only returned if you entered &quot;registrant_id&quot; as the value of `include_fields` query parameter. */
        registrant_id?: string;
        /** The participant's status.
         * `in_meeting` - In a meeting.
         * `in_waiting_room` - In a waiting room. */
        status?: 'in_meeting' | 'in_waiting_room';
        /** Participant email.

If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](/docs/api-reference/using-zoom-apis#email-address) for details. This returns an empty string value if the account calling the API is a BAA account. */
        user_email?: string;
        /** Participant ID. This is a unique ID assigned to the participant joining a meeting and is valid for that meeting only. */
        user_id?: string;
        /** The [breakout room](https://support.zoom.us/hc/en-us/articles/206476313-Managing-breakout-rooms) ID. Each breakout room is assigned a unique ID. */
        bo_mtg_id?: string;
        /** The participant's universally unique ID (UUID).
         * If the participant joins the meeting by logging into Zoom, this value is the `id` value in the [**Get a user**](/docs/api-reference/zoom-api/methods#operation/user) API response.
         * If the participant joins the meeting **without** logging into Zoom, this returns an empty string value. */
        participant_user_id?: string;
    }[];
};

/** Get meeting poll reports - Response */
export type ZoomApi$Report$Meeting$Polls$Response = {
    /** The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID). */
    id?: number;
    /** The meeting's universally unique identifier (UUID). Each meeting instance generates a meeting UUID. */
    uuid?: string;
    /** The meeting's start time. */
    start_time?: string;
    /** Information about the meeting questions. */
    questions?: {
        /** The participant's email address. */
        email?: string;
        /** The participant's display name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `name` field will return the &quot;Anonymous Attendee&quot; value. */
        name?: string;
        /** The participant's first name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `first_name` field will return the &quot;Anonymous Attendee&quot; value. */
        first_name?: string;
        /** The participant's last name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `last_name` field will return the &quot;Anonymous Attendee&quot; value. */
        last_name?: string;
        /** Information about the user's questions and answers. */
        question_details?: {
            /** The user's given answer. */
            answer?: string;
            /** The date and time at which the user answered the poll question. */
            date_time?: string;
            /** The poll's ID. */
            polling_id?: string;
            /** The poll question. */
            question?: string;
        }[];
    }[];
};

/** Get meeting Q&A report - Response */
export type ZoomApi$Report$Meeting$Q$A$Response = {
    /** The meeting ID in `long` format, represented as int64 data type in JSON. Also known as the meeting number. */
    id?: number;
    /** Array of meeting question objects. */
    questions?: {
        /** The user ID of the user who asked the question. This value returns blank for external users. */
        user_id?: string;
        /** Participant's email. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        email?: string;
        /** Participant's display name.  
  

If the anonymous [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) option is enabled and if a participant submits the Q&amp;A without providing their name, the value of the `name` field is &quot;Anonymous Attendee&quot;. */
        name?: string;
        /** Array of questions from user. */
        question_details?: {
            /** The given answer. If this is a live answer, the value is 'live answered'.
             **Note:** All answers will be returned together and separated by semicolons. For more detailed answer information, please see the "answer_details" field. */
            answer?: string;
            /** Asked question. */
            question?: string;
            /** Question UUID. */
            question_id?: string;
            /** Question create time. */
            create_time?: string;
            /** Question status.
If not supported, the value will be `default`. */
            question_status?:
                | 'default'
                | 'open'
                | 'dismissed'
                | 'answered'
                | 'deleted';
            /** Array of answers from the user. */
            answer_details?: {
                /** The user ID of the user who answered the question. This value returns blank for external users. */
                user_id?: string;
                /** User display name, including the host or participant. */
                name?: string;
                /** Participant's email. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
                email?: string;
                /** The answer from host or the comment from participant. */
                content?: string;
                /** Content submit time. */
                create_time?: string;
                /** Type of answer. */
                type?:
                    | 'default'
                    | 'host_answered_publicly'
                    | 'host_answered_privately'
                    | 'participant_commented'
                    | 'host_answered';
            }[];
        }[];
    }[];
    /** Meeting start time. */
    start_time?: string;
    /** The meeting UUID. Each meeting instance will generate its own UUID - for example, after a meeting ends, a new UUID will be generated for the next instance of the meeting. Double-encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//'. */
    uuid?: string;
};

/** Get meeting survey report - Response */
export type ZoomApi$Report$Meeting$Survey$Response = {
    /** The meeting ID. */
    meeting_id?: number;
    /** The meeting's universally unique identifier (UUID). Each meeting instance generates a meeting UUID. */
    meeting_uuid?: string;
    /** The meeting's start time. */
    start_time?: string;
    /** The survey's ID */
    survey_id?: string;
    /** The name of survey */
    survey_name?: string;
    /** Information about the survey questions and answers. */
    survey_answers?: {
        /** The participant's email address. */
        email?: string;
        /** The participant's display name. **Allow participants to answer questions anonymously** setting is enabled for a [survey](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057559), the participant's survey information is kept anonymous and the `name` field will return the &quot;Anonymous Attendee&quot; value. */
        name?: string;
        /** The participant's first name. If the **Allow participants to answer questions anonymously** setting is enabled for a [survey](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057559), the participant's survey information is kept anonymous and the `first_name` field will return the &quot;Anonymous Attendee&quot; value. */
        first_name?: string;
        /** The participant's last name. If the **Allow participants to answer questions anonymously** setting is enabled for a [survey](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057559), the participant's survey information is kept anonymous and the `last_name` field will return the &quot;Anonymous Attendee&quot; value. */
        last_name?: string;
        /** Information about the user's questions and answers. */
        answer_details?: {
            /** The survey question. */
            question?: string;
            /** The question's ID */
            question_id?: string;
            /** The user's given answer. */
            answer?: string;
            /** The date and time at which the user answered the survey question. */
            date_time?: string;
        }[];
    }[];
};

/** Get a meeting activities report - Query parameters */
export type ZoomApi$Report$Meetingactivitylogs$Params = Partial<{
    /** The start date in 'yyyy-MM-dd'format. The date range defined by the `from` and `to` parameters should only be one month, as the report includes only one month's worth of data at once. */
    from: string;
    /** The end date 'yyyy-MM-dd' format. */
    to: string;
    /** The number of records to be returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The meeting's number. */
    meeting_number: string;
    /** An operator's name or email. */
    search_key: string;
    /** Activity type. 
-1 - All activities. 
0 - Meeting created. 
1 - Meeting started. 
2 - User joined. 
3 - User left. 
4 - Remote control. 
5 - In-meeting chat. 
9 - Meeting ended. */
    activity_type:
        | 'All Activities'
        | 'Meeting Created'
        | 'Meeting Started'
        | 'User Join'
        | 'User Left'
        | 'Remote Control'
        | 'In-Meeting Chat'
        | 'Meeting Ended';
}>;

/** Get a meeting activities report - Response */
export type ZoomApi$Report$Meetingactivitylogs$Response = {
    /** Array of meeting activity logs. */
    meeting_activity_logs?: {
        /** The meeting number. */
        meeting_number: string;
        /** The operator's activity time. */
        activity_time: string;
        /** The operator's display name. */
        operator: string;
        /** The operator's email. */
        operator_email: string;
        /** The operator's activity category. 
-1 - All Activities. 
0 - Meeting created. 
1 - Meeting started. 
2 - User joined. 
3 - User left. 
4 - Remote control. 
5 - In-meeting chat. 
9 - Meeting ended. */
        activity_category: string;
        /** The operator's activity detail. */
        activity_detail: string;
    }[];
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of records returned with a single API call. */
    page_size?: number;
};

/** Get meeting reports - Query parameters */
export type ZoomApi$Report$Meetings$Params = Partial<{
    /** Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once. */
    from: string;
    /** End date. */
    to: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The meeting type to query for:
     * `past` - All past meetings.
     * `pastOne` - A single past user meeting.
     * `pastJoined` - All past meetings the account's users hosted or joined. */
    type: 'past' | 'pastOne' | 'pastJoined';
}>;

/** Get meeting reports - Response */
export type ZoomApi$Report$Meetings$Response = {
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** The report's start date. */
    from?: string;
    /** Information about the meeting. */
    meetings?: {
        /** Information about the meeting's assigned custom keys and values. This returns a maximum of 10 items. */
        custom_keys?: {
            /** The custom key name. */
            key?: string;
            /** The custom key's value. */
            value?: string;
        }[];
        /** The meeting's duration. */
        duration?: number;
        /** The meeting's end date and time. */
        end_time?: string;
        /** The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID). */
        id?: number;
        /** The number of meeting participants. */
        participants_count?: number;
        /** The Video SDK custom session ID. */
        session_key?: string;
        /** Whether the meeting was created directly through Zoom or via an API request:
         * If the meeting was created via an OAuth app, this field returns the OAuth app's name.
         * If the meeting was created via JWT or the Zoom Web Portal, this returns the `Zoom` value. */
        source?: string;
        /** The meeting's start date and time. */
        start_time?: string;
        /** The meeting's topic. */
        topic?: string;
        /** The sum of meeting minutes from all meeting participants in the meeting. */
        total_minutes?: number;
        /** The type of meeting or webinar. 

meeting: 
* `1` - Instant meeting. 
* `2` - Scheduled meeting. 
* `3` - A recurring meeting with no fixed time. 
* `4` - A meeting created via PMI (Personal Meeting ID). 
* `7` - A [Personal Audio Conference](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) (PAC). 
* `8` - Recurring meeting with a fixed time. 

webinar: 
* `5` - A webinar. 
* `6` - A recurring webinar without a fixed time 
* `9` - A recurring webinar with a fixed time.  */
        type?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        /** The user's email address. */
        user_email?: string;
        /** The user's display name. */
        user_name?: string;
        /** The meeting's universally unique identifier (UUID). Each meeting instance generates a meeting UUID. */
        uuid?: string;
        /** The meeting's scheduled date and time. */
        schedule_time?: string;
        /** The date and time at which the attendee joined the waiting room. */
        join_waiting_room_time?: string;
        /** The date and time at which the attendee joined the meeting. */
        join_time?: string;
        /** The date and time at which the attendee left the meeting. */
        leave_time?: string;
        /** Host Account Name of Hosting Organization. */
        host_organization?: string;
        /** Host's name. */
        host_name?: string;
        /** Whether or not the screenshare feature was used by this user in the meeting. This is meeting feature for attendee level. */
        has_screen_share?: boolean;
        /** Whether or not the recording feature was enabled by this user in the meeting. This is meeting feature for attendee level. */
        has_recording?: boolean;
        /** Whether or not the chat feature was used by this user in the meeting. This is meeting feature for attendee level. */
        has_chat?: boolean;
        /** The meeting's encryption status.
         * `1` - E2E encryption.
         * `2` - Enhanced encryption. */
        meeting_encryption_status?: 1 | 2;
        /** The number of meeting participants from my account. */
        participants_count_my_account?: number;
    }[];
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The report's end date. */
    to?: string;
};

/** Get operation logs report - Query parameters */
export type ZoomApi$Report$Operation$Logs$Params = Partial<{
    /** Start date in 'yyyy-mm-dd' or 'yyyy-MM-dd HH:mm' format. The date range defined by the `from` and `to` parameters should only be one month as the report includes only one month worth of data at once. */
    from: string;
    /** End date in 'yyyy-mm-dd' or 'yyyy-MM-dd HH:mm' format. */
    to: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** **Optional**  
 
Filter your response by a category type to see reports for a specific category.
The value for this field can be one of the following:  
  `all`  
 `user`  
 `user_settings`  
 `account`  
 `billing`  
 `im`  
 `recording`  
 `phone_contacts`  
 `webinar`  
 `sub_account`  
 `role`  
 `zoom_rooms` */
    category_type:
        | 'all'
        | 'user'
        | 'user_settings'
        | 'account'
        | 'billing'
        | 'im'
        | 'recording'
        | 'phone_contacts'
        | 'webinar'
        | 'sub_account'
        | 'role'
        | 'zoom_rooms';
}>;

/** Get operation logs report - Response */
export type ZoomApi$Report$Operation$Logs$Response = {
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes. */
    next_page_token?: string;
    /** The amount of records returns within a single API call.  */
    page_size?: number;
} & {
    /** Array of operation log objects */
    operation_logs?: {
        /** Action */
        action?: string;
        /** Category type */
        category_type?: string;
        /** Operation detail */
        operation_detail?: string;
        /** The user who performed the operation. */
        operator?: string;
        /** The time at which the operation was performed. */
        time?: string;
    }[];
};

/** Get sign In / sign out activity report - Query parameters */
export type ZoomApi$Report$Sign$In$Sign$Out$Activities$Params = Partial<{
    /** Start date for which you would like to view the activity logs report. Using the `from` and `to` parameters, specify a monthly date range for the report as the API only provides one month worth of data in one request. The specified date range should fall within the last six months. */
    from: string;
    /** End date up to which you would like to view the activity logs report. */
    to: string;
    /** The number of records to be returned within a single API call */
    page_size: number;
    /** Next page token is used to paginate through large result sets */
    next_page_token: string;
}>;

/** Get sign In / sign out activity report - Response */
export type ZoomApi$Report$Sign$In$Sign$Out$Activities$Response = {
    /** Array of activity logs. */
    activity_logs?: {
        /** The client interface type using which the activity was performed. */
        client_type?: string;
        /** Email address of the user used for the activity. */
        email?: string;
        /** The IP address of the user's device. */
        ip_address?: string;
        /** Time during which the activity occurred. */
        time?: string;
        /** The type of activity.
         * `Sign in` &mdash; Sign in activity by user.
         * `Sign out` &mdash; Sign out activity by user. */
        type?: 'Sign in' | 'Sign out';
        /** Zoom client version of the user. */
        version?: string;
    }[];
    /** Start date from which you want the activity logs report to be generated. */
    from?: string;
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** End date until which you want the activity logs report to be generated */
    to?: string;
};

/** Get telephone reports - Query parameters */
export type ZoomApi$Report$Telephone$Params = Partial<{
    /** Audio types:  
 `1` - Toll-free Call-in &amp; Call-out.  
 `2` - Toll   
 
`3` - SIP Connected Audio */
    type: '1' | '2' | '3';
    /** The type of date to query. 
* `start_time` &mdash; Query by call start time. 
* `end_time` &mdash; Query by call end time. 
* `meeting_start_time` &mdash; Query by meeting start time. 
* `meeting_end_time` &mdash; Query by meeting end time. 

This value defaults to `start_time`. */
    query_date_type:
        | 'start_time'
        | 'end_time'
        | 'meeting_start_time'
        | 'meeting_end_time';
    /** Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once. */
    from: string;
    /** End date. */
    to: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** The page number of the current page in the returned records. This field is **not** available if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value. 

This field is deprecated. Use the `next_page_token` query parameter for pagination. */
    page_number: number;
    /** Use the next page token to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** Get telephone reports - Response */
export type ZoomApi$Report$Telephone$Response = {
    /** Start date for this report. */
    from?: string;
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. This field does **not** return if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value. */
    page_count?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** End date for this report. */
    to?: string;
    /** The total number of all the records available across pages. This field does **not** return if the `query_date_type` parameter is the `meeting_start_time` or `meeting_end_time` value. */
    total_records?: number;
} & {
    /** Array of telephony objects. */
    telephony_usage?: {
        /** Caller's call-in number. */
        call_in_number?: string;
        /** Country name. */
        country_name?: string;
        /** User department. */
        dept?: string;
        /** Call leg duration */
        duration?: number;
        /** Call leg end time */
        end_time?: string;
        /** User email. */
        host_email?: string;
        /** The user ID of the meeting host. */
        host_id?: string;
        /** User display name. */
        host_name?: string;
        /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in &quot;**long**&quot; format(represented as int64 data type in JSON), also known as the meeting number. */
        meeting_id?: number;
        /** Meeting type. */
        meeting_type?: string;
        /** Toll-free telephone number.  */
        phone_number?: string;
        /** Calling rate for the telephone call. */
        rate?: number;
        /** The number that is signaled to Zoom.  */
        signaled_number?: string;
        /** Call leg start time */
        start_time?: string;
        /** Total cost (USD) for Call Out. Calculated as plan rate by duration. */
        total?: number;
        /** Call type. */
        type?:
            | 'toll-free'
            | 'call-out'
            | 'call-in'
            | 'US toll-number'
            | 'global toll-number'
            | 'premium'
            | 'premium call-in'
            | 'Toll';
        /** Meeting UUID. */
        uuid?: string;
    }[];
};

/** Get upcoming events report - Query parameters */
export type ZoomApi$Report$Upcoming$Events$Params = Partial<{
    /** Start date in 'yyyy-mm-dd' format. The date range defined by the &quot;from&quot; and &quot;to&quot; parameters should only be one month as the report includes only one month worth of data at once. */
    from: string;
    /** End date. */
    to: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The type of event to query. 
* `meeting` &mdash; A meeting event. 
* `webinar` &mdash; A webinar event. 
* `all` &mdash; Both meeting and webinar events.

This value defaults to `all`. */
    type: 'meeting' | 'webinar' | 'all';
    /** The group ID. To get a group ID, use the [**List groups**](/api-reference/zoom-api/methods#operation/groups) API. 

 **Note:** The API response will only contain meetings where the host is a member of the queried group ID. */
    group_id: string;
}>;

/** Get upcoming events report - Response */
export type ZoomApi$Report$Upcoming$Events$Response = {
    /** The report's start date. This value must be within the past six months. */
    from?: string;
    /** The next page token is used to paginate through large result sets. A next page token returns when the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of records returned in a single API call. */
    page_size?: number;
    /** The report's end date. This value must be within the past six months and cannot exceed a month from the `from` value. */
    to?: string;
    /** Information about the upcoming event. */
    upcoming_events?: {
        /** The event host's department. */
        dept?: string;
        /** The event host's ID. */
        host_id?: string;
        /** The event host's name. */
        host_name?: string;
        /** The event's unique ID. */
        id?: string;
        /** The event's start time. */
        start_time?: string;
        /** The event's topic. */
        topic?: string;
    }[];
};

/** Get active or inactive host reports - Query parameters */
export type ZoomApi$Report$Users$Params = Partial<{
    /** Active or inactive hosts.  
 `active` - Active hosts.   
 `inactive` - Inactive hosts. */
    type: 'active' | 'inactive';
    /** Start date in 'yyyy-mm-dd' format. The date range defined by the `from` and `to` parameters should only be one month as the report includes only one month worth of data at once. */
    from: string;
    /** End date. */
    to: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** The page number of the current page in the returned records. */
    page_number: number;
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token: string;
    /** The group ID. To get a group ID, use the [**List groups**](/docs/api/rest/reference/user/methods/#operation/groups) API. 

 **Note:** The API response will only contain users who are members of the queried group ID. */
    group_id: string;
}>;

/** Get active or inactive host reports - Response */
export type ZoomApi$Report$Users$Response = {
    /** Start date for this report. */
    from?: string;
    /** The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** The page number of the current results. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** End date for this report. */
    to?: string;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** Number of meeting minutes for this range. */
    total_meeting_minutes?: number;
    /** Number of meetings for this range. */
    total_meetings?: number;
    /** Number of participants for this range. */
    total_participants?: number;
    /** Array of user objects. */
    users?: {
        /** Custom attributes that have been assigned to the user. */
        custom_attributes?: {
            /** Identifier for the custom attribute. */
            key?: string;
            /** Name of the custom attribute. */
            name?: string;
            /** Value of the custom attribute. */
            value?: string;
        }[];
        /** User department. */
        dept?: string;
        /** User email. */
        email?: string;
        /** User ID. */
        id?: string;
        /** Number of meeting minutes for user. */
        meeting_minutes?: number;
        /** Number of meetings for user. */
        meetings?: number;
        /** Number of participants in meetings for user. */
        participants?: number;
        /** User type. */
        type?: number;
        /** User display name. */
        user_name?: string;
    }[];
};

/** Get webinar detail reports - Response */
export type ZoomApi$Report$Webinar$Details$Response = {
    /** Custom keys and values assigned to the meeting. */
    custom_keys?: {
        /** Custom key associated with the user. */
        key?: string;
        /** Value of the custom key associated with the user. */
        value?: string;
    }[];
    /** Department of the host. */
    dept?: string;
    /** Meeting duration. */
    duration?: number;
    /** Meeting end time. */
    end_time?: string;
    /** [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in &quot;**long**&quot; format(represented as int64 data type in JSON), also known as the meeting number. */
    id?: number;
    /** Number of meeting participants. */
    participants_count?: number;
    /** Meeting start time. */
    start_time?: string;
    /** Meeting topic. */
    topic?: string;
    /** Number of Webinar minutes. This represents the total amount of Webinar minutes attended by each participant including the host, for a Webinar hosted by the user. For instance if there were one host(named A) and one participant(named B) in a Webinar, the value of total_minutes would be calculated as below:

**total_minutes** = Total Webinar Attendance Minutes of A + Total Webinar Attendance Minutes of B */
    total_minutes?: number;
    /** Tracking fields. */
    tracking_fields?: {
        /** Tracking fields type. */
        field?: string;
        /** Tracking fields value. */
        value?: string;
    }[];
    /** Meeting type. */
    type?: number;
    /** User email. */
    user_email?: string;
    /** User display name. */
    user_name?: string;
    /** Webinar UUID. Each webinar instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated when the next instance of the webinar starts). [double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) the UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it. */
    uuid?: string;
};

/** Get webinar participant reports - Query parameters */
export type ZoomApi$Report$Webinar$Participants$Params = Partial<{
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
    /** The additional query parameters to include.
     * `registrant_id` - Include the registrant's ID in the API response. The registrant ID is the webinar participant's unique ID. */
    include_fields: 'registrant_id';
}>;

/** Get webinar participant reports - Response */
export type ZoomApi$Report$Webinar$Participants$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** The number of records returned within a single API call. */
    page_size?: number;
    /** The number of all records available across pages. */
    total_records?: number;
} & {
    /** Information about the webinar participant. */
    participants?: {
        /** The participant's SDK identifier. This value can be alphanumeric, up to a maximum length of 35 characters. */
        customer_key?: string;
        /** Participant duration, in seconds, calculated by subtracting the `leave_time` from the `join_time` for the `user_id`. If the participant leaves and rejoins the same meeting, they will be assigned a different `user_id` and Zoom displays their new duration in a separate object. Note that because of this, the duration may not reflect the total time the user was in the meeting. */
        duration?: number;
        /** Whether failover occurred during the webinar. */
        failover?: boolean;
        /** The participant's universally unique ID (UUID). 
* If the participant joins the meeting by logging into Zoom, this value is the `id` value in the [**Get a user**](/docs/api-reference/zoom-api/methods#operation/user) API response. 
* If the participant joins the meeting **without** logging into Zoom, this returns an empty string value. 

**Note:** Use the `participant_user_id` value instead of this value. We will remove this response in a future release. */
        id?: string;
        /** The participant's join time. */
        join_time?: string;
        /** The participant's leave time. */
        leave_time?: string;
        /** The participant's display name. This returns an empty string value if the account calling the API is a BAA account. */
        name?: string;
        /** The registrant's ID. This field only returns if you provide the `registrant_id` value for the `include_fields` query parameter. */
        registrant_id?: string;
        /** The participant's status.
         * `in_meeting` - In a meeting.
         * `in_waiting_room` - In a waiting room. */
        status?: 'in_meeting' | 'in_waiting_room';
        /** The participant's email address. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](/docs/api-reference/using-zoom-apis#email-address) for details. This returns an empty string value if the account calling the API is a BAA account. */
        user_email?: string;
        /** The participant's ID. This ID is assigned to the participant upon joining the webinar and is only valid for that webinar. */
        user_id?: string;
        /** The participant's universally unique ID (UUID).
         * If the participant joins the meeting by logging into Zoom, this value is the `id` value in the [**Get a user**](/docs/api-reference/zoom-api/methods#operation/user) API response.
         * If the participant joins the meeting **without** logging into Zoom, this returns an empty string value. */
        participant_user_id?: string;
        /** The [breakout room](https://support.zoom.us/hc/en-us/articles/206476313-Managing-breakout-rooms) ID. Each breakout room is assigned a unique ID. */
        bo_mtg_id?: string;
    }[];
};

/** Get webinar poll reports - Response */
export type ZoomApi$Report$Webinar$Polls$Response = {
    /** The webinar ID. */
    id?: number;
    /** Information about the webinar questions. */
    questions?: {
        /** The participant's email address. */
        email?: string;
        /** The participant's display name. **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `name` field will return the &quot;Anonymous Attendee&quot; value. */
        name?: string;
        /** The participant's first name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `first_name` field will return the &quot;Anonymous Attendee&quot; value. */
        first_name?: string;
        /** The participant's last name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant's polling information is kept anonymous and the `last_name` field will return the &quot;Anonymous Attendee&quot; value. */
        last_name?: string;
        /** Information about the user's questions and answers. */
        question_details?: {
            /** The user's given answer. */
            answer?: string;
            /** The date and time at which the user answered the poll question. */
            date_time?: string;
            /** The poll's ID. */
            polling_id?: string;
            /** The poll question. */
            question?: string;
        }[];
    }[];
    /** The webinar's start time. */
    start_time?: string;
    /** The webinar's universally unique identifier (UUID). Each webinar instance generates a webinar UUID. */
    uuid?: string;
};

/** Get webinar Q&A report - Response */
export type ZoomApi$Report$Webinar$Q$A$Response = {
    /** Webinar ID in `long` format, represented as int64 data type in JSON. Also known as the webinar number. */
    id?: number;
    /** Array of webinar question objects. */
    questions?: {
        /** The user ID of the user who asked the question. This value returns blank for external users. */
        user_id?: string;
        /** Participant's email. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
        email?: string;
        /** Participant's display name.  
  

If anonymous [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) option is enabled and if a participant submits the Q&amp;A without providing their name, the value of the `name` field will be &quot;Anonymous Attendee&quot;. */
        name?: string;
        /** Array of questions from the user. */
        question_details?: {
            /** The given answer. If this is a live answer, the value is 'live answered'.
             **Note:** All answers will be returned together and separated by semicolons. For more detailed answer information, please see the "answer_details" field. */
            answer?: string;
            /** Asked question. */
            question?: string;
            /** Question UUID. */
            question_id?: string;
            /** Question creation time. */
            create_time?: string;
            /** Question status.
If not supported, the value will be `default`. */
            question_status?:
                | 'default'
                | 'open'
                | 'dismissed'
                | 'answered'
                | 'deleted';
            /** Array of answers from user. */
            answer_details?: {
                /** The user ID of the user who answered the question. This value returns blank for external users. */
                user_id?: string;
                /** User display name, including the host or participant.  */
                name?: string;
                /** Participant's email. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details. */
                email?: string;
                /** The answer from the host or the comment from a participant. */
                content?: string;
                /** Content submission time. */
                create_time?: string;
                /** Type of answer. */
                type?:
                    | 'default'
                    | 'host_answered_publicly'
                    | 'host_answered_privately'
                    | 'participant_commented'
                    | 'host_answered';
            }[];
        }[];
    }[];
    /** Webinar start time. */
    start_time?: string;
    /** Webinar UUID. Each webinar instance will generate its own UUID - after a webinar ends, a new UUID will be generated for the next instance of the webinar. Double-encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it. */
    uuid?: string;
};

/** Get webinar survey report - Response */
export type ZoomApi$Report$Webinar$Survey$Response = {
    /** The webinar ID. */
    webinar_id?: number;
    /** The webinar's universally unique identifier (UUID). Each webinar instance generates a webinar UUID. */
    webinar_uuid?: string;
    /** The webinar's start time. */
    start_time?: string;
    /** The survey's ID */
    survey_id?: string;
    /** The name of survey */
    survey_name?: string;
    /** Information about the survey questions and answers. */
    survey_answers?: {
        /** The participant's email address. */
        email?: string;
        /** The participant's display name. **Allow participants to answer questions anonymously** setting is enabled for a [survey](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057559), the participant's survey information is kept anonymous and the `name` field will return the &quot;Anonymous Attendee&quot; value. */
        name?: string;
        /** The participant's first name. If the **Allow participants to answer questions anonymously** setting is enabled for a [survey](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057559), the participant's survey information is kept anonymous and the `first_name` field will return the &quot;Anonymous Attendee&quot; value. */
        first_name?: string;
        /** The participant's last name. If the **Allow participants to answer questions anonymously** setting is enabled for a [survey](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0057559), the participant's survey information is kept anonymous and the `last_name` field will return the &quot;Anonymous Attendee&quot; value. */
        last_name?: string;
        /** Information about the user's questions and answers. */
        answer_details?: {
            /** The survey question. */
            question?: string;
            /** The question's ID */
            question_id?: string;
            /** The user's given answer. */
            answer?: string;
            /** The date and time at which the user answered the survey question. */
            date_time?: string;
        }[];
    }[];
};

/** Set webinar's default branding virtual background - Query parameters */
export type ZoomApi$Set$Webinar$Branding$V$B$Params = Partial<{
    /** The virtual background file ID to update. */
    id: string;
    /** Whether to set the virtual background file as the new default for all panelists. This includes panelists not currently assigned a default virtual background. */
    set_default_for_all_panelists: boolean;
}>;

/** Create a tracking field - Request body */
export type ZoomApi$Trackingfield$Create$Request = {
    /** Label/ Name for the tracking field. */
    field?: string;
    /** Array of recommended values */
    recommended_values?: string[];
    /** Tracking Field Required */
    required?: boolean;
    /** Tracking Field Visible */
    visible?: boolean;
};

/** Create a tracking field - Response */
export type ZoomApi$Trackingfield$Create$Response = {
    /** Tracking Field ID */
    id?: string;
} & {
    /** Label/ Name for the tracking field. */
    field?: string;
    /** Array of recommended values */
    recommended_values?: string[];
    /** Tracking Field Required */
    required?: boolean;
    /** Tracking Field Visible */
    visible?: boolean;
};

/** Get a tracking field - Response */
export type ZoomApi$Trackingfield$Get$Response = {
    /** Tracking field ID. */
    id?: string;
    /** Label or name for the tracking field. */
    field?: string;
    /** Array of recommended values. */
    recommended_values?: string[];
    /** Tracking field required. */
    required?: boolean;
    /** Tracking field visible. */
    visible?: boolean;
};

/** List tracking fields - Response */
export type ZoomApi$Trackingfield$List$Response = {
    /** The number of all records available across pages. */
    total_records?: number;
    /** Array of tracking fields. */
    tracking_fields?: {
        /** Tracking field's ID. */
        id?: string;
        /** Label or name for the tracking field. */
        field?: string;
        /** Array of recommended values */
        recommended_values?: string[];
        /** Tracking field required. */
        required?: boolean;
        /** Tracking field visible. */
        visible?: boolean;
    }[];
};

/** Update a tracking field - Request body */
export type ZoomApi$Trackingfield$Update$Request = {
    /** Label or name for the tracking field. */
    field?: string;
    /** Array of recommended values. */
    recommended_values?: string[];
    /** Tracking field required. */
    required?: boolean;
    /** Tracking field visible. */
    visible?: boolean;
};

/** Get account's TSP information - Response */
export type ZoomApi$Tsp$Response = {
    /** Control restriction on account users adding a TSP number outside of account's dial in numbers. */
    dial_in_number_unrestricted?: boolean;
    /** List of dial in numbers. */
    dial_in_numbers?: {
        /** Country code. */
        code?: string;
        /** Dial-in number. Length is less than 16. */
        number?: string;
        /** Dial-in number type. */
        type?: string;
    }[];
    /** Enable Telephony Service Provider for account users. */
    enable?: boolean;
    /** For master account, extend its TSP setting to all sub accounts. For sub account, extend TSP setting from master account. */
    master_account_setting_extended?: boolean;
    /** Control restriction on account users being able to modify their TSP credentials. */
    modify_credential_forbidden?: boolean;
    /** Telephony bridge zone */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
    /** Enable TSP feature for account. This has to be enabled to use any other tsp settings/features. */
    tsp_enabled?: boolean;
    /** Telephony service provider. */
    tsp_provider?: string;
};

/** Update an account's TSP information - Request body */
export type ZoomApi$Tsp$Update$Request = {
    /** Control restriction on account users adding a TSP number outside of account's dial in numbers. */
    dial_in_number_unrestricted?: boolean;
    /** Enable 3rd party audio conferencing for account users */
    enable?: boolean;
    /** For master account, extend its TSP setting to all sub accounts. For sub account, extend TSP setting from master account. */
    master_account_setting_extended?: boolean;
    /** Control restriction on account users being able to modify their TSP credentials. */
    modify_credential_forbidden?: boolean;
    /** Telephony bridge */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
    /** Enable TSP feature for account. This has to be enabled to use any other tsp settings/features. */
    tsp_enabled?: boolean;
    /** 3rd party audio conferencing provider */
    tsp_provider?: string;
};

/** Set global dial-in URL for a TSP user - Request body */
export type ZoomApi$Tsp$Url$Update$Request = {
    /** The global dial-in URL for a TSP enabled account. The URL must be valid, with a maximum length of 512 characters. */
    audio_url?: string;
};

/** Update an archived file's auto-delete status - Request body */
export type ZoomApi$Update$Archived$File$Request = {
    /** Whether to auto-delete the archived file. */
    auto_delete: boolean;
};

/** Change device  - Request body */
export type ZoomApi$Update$Device$Request = {
    /** The name of the device. */
    device_name: string;
    /** The name of the tag. */
    tag?: string;
    /** id of the Zoom Room. */
    room_id?: string;
    /** Device Type:  
 `0` - Zoom Rooms Computer.  
 `1` - Zoom Rooms Controller.  
 `2` - Zoom Rooms Scheduling Display. */
    device_type?: 0 | 1 | 3;
};

/** Update a live meeting message - Request body */
export type ZoomApi$Update$Meeting$Chat$Message$By$Id$Request = {
    /** The content of the chat message. */
    message_content: string;
};

/** Update SIP phone - Request body */
export type ZoomApi$Update$S$I$P$Phone$Phones$Request = {
    /** The authorization name of the user that is registered for SIP phone. */
    authorization_name?: string;
    /** The name or IP address of your provider's SIP domain, such as example.com.  */
    domain?: string;
    /** The password generated for the user in the SIP account. */
    password?: string;
    /** The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server. */
    registration_expire_time?: number;
    /** The phone number associated with the user in the SIP account. */
    user_name?: string;
    /** The number to dial for checking voicemail. */
    voice_mail?: string;
    /** The displayed phone number associated with the user can be either in extension format or E.164 format. You can specify the displayed number when the dialable number differs from the SIP username. */
    display_number?: string;
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server_2?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
    /** Defined a set of basic components of SIP network architecture, including proxy_server, register_server and transport_protocol. */
    server_3?: {
        /** The IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server. */
        proxy_server?: string;
        /** The IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. */
        register_server?: string;
        /** Protocols supported by the SIP provider.  
  The value must be either `UDP`, `TCP`, `TLS`, `AUTO`. */
        transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
    };
};

/** Update a webinar's branding name tag - Request body */
export type ZoomApi$Update$Webinar$Branding$Name$Tag$Request = {
    /** The name tag's name.

**Note:** This value cannot exceed more than 50 characters. */
    name?: string;
    /** The name tag's text color. */
    text_color?: string;
    /** The name tag's accent color. */
    accent_color?: string;
    /** The name tag's background color. */
    background_color?: string;
    /** Whether set the name tag as the default name tag or not. */
    is_default?: boolean;
    /** Whether to set the name tag as the new default for all panelists or not, including panelists not currently assigned a default name tag. */
    set_default_for_all_panelists?: boolean;
};

/** Upgrade ZPA firmware or app - Request body */
export type ZoomApi$Upgrade$Zpas$App$Request = {
    /** The ZDM group ID. */
    zdm_group_id: string;
    data:
        | {
              firmware_versions?: {
                  /** The device's manufacturer. */
                  vendor?: string;
                  /** The firmware version. */
                  version?: string;
                  /** The device's model name. Maximum of 64 characters. */
                  model?: string;
              }[];
              /** Upgrade firmware. */
              upgrade_type: 'UPGRADE_FIRMWARE';
          }
        | {
              /** The app version to be upgraded. If upgrade type is `0`, this field won't work. If upgrade type is `1`, this field will work. */
              app_version?: string;
              /** Upgrade app. */
              upgrade_type: 'UPGRADE_APP';
          };
};

/** Upload a webinar's branding virtual background - Response */
export type ZoomApi$Upload$Webinar$Branding$V$B$Response = {
    /** The virtual background file's ID. */
    id?: string;
    /** The virtual background file's name. */
    name?: string;
    /** Whether the file is the default virtual background file. */
    is_default?: boolean;
    /** The virtual background file's size, in bytes. */
    size?: number;
    /** The virtual background file's file type.
     * `image` - An image file. */
    type?: 'image';
};

/** Upload a webinar's branding wallpaper - Response */
export type ZoomApi$Upload$Webinar$Branding$Wallpaper$Response = {
    /** The wallpaper file's ID. */
    id?: string;
    /** The wallpaper file's name. */
    name?: string;
    /** The wallpaper file's size, in bytes. */
    size?: number;
    /** The wallpaper file's file type.
     * `image` - An image file. */
    type?: 'image';
};

/** List a user's PAC accounts - Response */
export type ZoomApi$User$P$A$Cs$Response = {
    /** Information about the PAC accounts. */
    pac_accounts?: {
        /** The conference ID. */
        conference_id?: number;
        /** Information about the account's dedicated dial-in numbers. */
        dedicated_dial_in_number?: {
            /** The dial-in country code. */
            country?: string;
            /** The dial-in number. */
            number?: string;
        }[];
        /** Information about the account's global dial-in numbers. */
        global_dial_in_numbers?: {
            /** The global dial-in country code. */
            country?: string;
            /** The global dial-in number. */
            number?: string;
        }[];
        /** The listen-only password, up to six characters in length. */
        listen_only_password?: string;
        /** The participant password, up to six characters in length. */
        participant_password?: string;
    }[];
};

/** Add a user's TSP account - Request body */
export type ZoomApi$User$T$S$P$Create$Request = {
    /** Conference code. A numeric value, with a length less than 16. */
    conference_code: string;
    /** List of dial in numbers. */
    dial_in_numbers?: {
        /** Country code. */
        code?: string;
        /** Country Label, if passed, will display in place of code. */
        country_label?: string;
        /** Dial-in number: length is less than 16. */
        number?: string;
        /** Dial-in number types:  
 `toll` - Toll number.  
 `tollfree` -Toll free number.  
 
`media_link` - Media link. */
        type?: 'toll' | 'tollfree' | 'media_link';
    }[];
    /** Leader PIN: numeric value, length is less than 16. */
    leader_pin: string;
    /** Telephony bridge */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
};

/** Add a user's TSP account - Response */
export type ZoomApi$User$T$S$P$Create$Response = {
    /** The ID of the TSP account. */
    id?: string;
} & {
    /** Conference code: numeric value, length is less than 16. */
    conference_code: string;
    /** List of dial in numbers. */
    dial_in_numbers?: {
        /** Country code. */
        code?: string;
        /** Country Label, if passed, will display in place of code. */
        country_label?: string;
        /** Dial-in number: length is less than 16. */
        number?: string;
        /** Dial-in number types:  
 `toll` - Toll number.  
 `tollfree` -Toll free number.  
 
`media_link` - Media link. */
        type?: 'toll' | 'tollfree' | 'media_link';
    }[];
    /** Leader PIN: numeric value, length is less than 16. */
    leader_pin: string;
    /** Telephony bridge */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
};

/** Get a user's TSP account - Response */
export type ZoomApi$User$T$S$P$Response = {
    /** Conference code: numeric value, length is less than 16. */
    conference_code: string;
    /** List of dial in numbers. */
    dial_in_numbers?: {
        /** Country code. */
        code?: string;
        /** Country Label, if passed, will display in place of code. */
        country_label?: string;
        /** Dial-in number: length is less than 16. */
        number?: string;
        /** Dial-in number types:  
 `toll` - Toll number.  
 `tollfree` -Toll free number.   
  `media_link` - Media link phone number. This is used for PSTN integration instead of a paid bridge number. */
        type?: 'toll' | 'tollfree' | 'media_link';
    }[];
    /** The TSP account's ID. */
    id?: string;
    /** Leader PIN. A numeric value, with a length of less than 16. */
    leader_pin: string;
    /** Telephony bridge */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
};

/** Update a TSP account - Request body */
export type ZoomApi$User$T$S$P$Update$Request = {
    /** Conference code. Numeric value. Length is less than 16. */
    conference_code: string;
    /** List of dial in numbers. */
    dial_in_numbers?: {
        /** Country code. */
        code?: string;
        /** Country label, if passed, will display in place of code. */
        country_label?: string;
        /** Dial-in number. Length is less than 16. */
        number?: string;
        /** Dial-in number types.
 `toll` - Toll number.  
 `tollfree` -Toll free number.  
 `media_link` - Media Link Phone Number. It is used for PSTN integration instead of paid bridge number. */
        type?: 'toll' | 'tollfree' | 'media_link';
    }[];
    /** Leader PIN. Numeric value. Length is less than 16. */
    leader_pin: string;
    /** Telephony bridge. */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
};

/** List user's TSP accounts - Response */
export type ZoomApi$User$T$S$Ps$Response = {
    /** List of the user's TSP accounts. */
    tsp_accounts?: {
        /** Conference code: numeric value, length is less than 16. */
        conference_code: string;
        /** List of dial in numbers. */
        dial_in_numbers?: {
            /** Country code. */
            code?: string;
            /** Country label, if passed, will display in place of code. */
            country_label?: string;
            /** Dial-in number. Length is less than 16. */
            number?: string;
            /** Dial-in number types. 
 `toll` - Toll number.  
 `tollfree` - Toll free number.  
 
`media_link` - Media link. */
            type?: 'toll' | 'tollfree' | 'media_link';
        }[];
        /** The TSP account's ID. */
        id?: '1' | '2';
        /** Leader PIN. Mumeric value, length is less than 16. */
        leader_pin: string;
        /** Telephony bridge
         */
        tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
    }[];
};

/** Get webinar absentees - Query parameters */
export type ZoomApi$Webinar$Absentees$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** Get webinar absentees - Response */
export type ZoomApi$Webinar$Absentees$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** **Deprecated.** This field is deprecated. We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** List of registrant objects. */
    registrants?: ({
        /** Registrant ID. */
        id?: string;
    } & {
        /** The registrant's address. */
        address?: string;
        /** The registrant's city. */
        city?: string;
        /** The registrant's questions and comments. */
        comments?: string;
        /** The registrant's two-letter ISO [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). */
        country?: string;
        /** Information about custom questions. */
        custom_questions?: {
            /** The title of the custom question. */
            title?: string;
            /** The custom question's response value. This has a limit of 128 characters. */
            value?: string;
        }[];
        /** The registrant's email address. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
        email: string;
        /** The registrant's first name. */
        first_name: string;
        /** The registrant's industry. */
        industry?: string;
        /** The registrant's job title. */
        job_title?: string;
        /** The registrant's last name. */
        last_name?: string;
        /** The registrant's number of employees.
         * `1-20`
         * `21-50`
         * `51-100`
         * `101-250`
         * `251-500`
         * `501-1,000`
         * `1,001-5,000`
         * `5,001-10,000`
         * `More than 10,000` */
        no_of_employees?:
            | ''
            | '1-20'
            | '21-50'
            | '51-100'
            | '101-250'
            | '251-500'
            | '501-1,000'
            | '1,001-5,000'
            | '5,001-10,000'
            | 'More than 10,000';
        /** The registrant's organization. */
        org?: string;
        /** The registrant's phone number. */
        phone?: string;
        /** The registrant's purchasing time frame.
         * `Within a month`
         * `1-3 months`
         * `4-6 months`
         * `More than 6 months`
         * `No timeframe` */
        purchasing_time_frame?:
            | ''
            | 'Within a month'
            | '1-3 months'
            | '4-6 months'
            | 'More than 6 months'
            | 'No timeframe';
        /** The registrant's role in the purchase process.
         * `Decision Maker`
         * `Evaluator/Recommender`
         * `Influencer`
         * `Not involved` */
        role_in_purchase_process?:
            | ''
            | 'Decision Maker'
            | 'Evaluator/Recommender'
            | 'Influencer'
            | 'Not involved';
        /** The registrant's state or province. */
        state?: string;
        /** The registrant's status.
         * `approved` - Registrant is approved.
         * `denied` - Registrant is denied.
         * `pending` - Registrant is waiting for approval. */
        status?: 'approved' | 'denied' | 'pending';
        /** The registrant's ZIP or postal code. */
        zip?: string;
    } & {
        /** The time when the registrant registered. */
        create_time?: string;
        /** The URL that an approved registrant can use to join the meeting or webinar. */
        join_url?: string;
        /** The status of the registrant's registration.
  `approved` - User has been successfully approved for the webinar.  
  `pending` -  The registration is still pending.  
  `denied` - User has been denied from joining the webinar. */
        status?: string;
    })[];
};

/** Create a webinar - Request body */
export type ZoomApi$Webinar$Create$Request = {
    /** Webinar description. */
    agenda?: string;
    /** Webinar duration, in minutes. Used for scheduled webinars only. */
    duration?: number;
    /** The webinar passcode. By default, it can be up to 10 characters in length and may contain alphanumeric characters as well as special characters like !, @, #, and others.

**Note**
- If the account owner or administrator has configured [Passcode Requirement](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063160#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode **must** meet those requirements. You can retrieve the requirements using the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API or the [**Get account settings**](/docs/api/accounts/#tag/accounts/GET/accounts/{accountId}/settings) API.
- If the **Passcode** user setting is enabled and `default_passcode` is not explicitly set to `false`, a passcode will be automatically generated when one is not provided.
- If the **Passcode** setting is enabled and [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, a passcode will be automatically generated when one is not provided. */
    password?: string;
    /** Determines whether to automatically generate a passcode for the webinar when no passcode is provided and the user's **Passcode** setting is enabled. Defaults to `true`. When set to `false`, webinars will only have a passcode if one is explicitly provided. */
    default_passcode?: boolean;
    /** Recurrence object. Use this object only for a webinar of type `9`, a recurring webinar with fixed time.  */
    recurrence?: {
        /** Select a date when the webinar will recur before it is canceled. Should be in UTC time, such as `2017-11-25T12:00:00Z`. Cannot be used with `end_times`. */
        end_date_time?: string;
        /** Select how many times the webinar will recur before it is canceled. The maximum number of recurring is 60. Cannot be used with `end_date_time`. */
        end_times?: number;
        /** Use this field **only if you're scheduling a recurring webinar of type `3`** to state which day in a month the webinar should recur. The value range is from 1 to 31.

For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`. */
        monthly_day?: number;
        /** Use this field **only if you're scheduling a recurring webinar of type `3`** to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.**   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** Use this field **only if you're scheduling a recurring webinar of type `3`** to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field.   
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** Define the interval when the webinar should recur. For instance, to schedule a webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`. 

For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months. */
        repeat_interval?: number;
        /** Recurrence webinar types.
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** Use this field **only if you're scheduling a recurring webinar of type** `2` to state which day(s) of the week the webinar should repeat.
The value for this field could be a number between `1` to `7` in string format. For instance, if the webinar should recur on Sunday, provide `1` as the value of this field.    
   
  **Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the webinar should recur on Sundays and Tuesdays, provide `1,3` as the value of this field.

  
 `1`  - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday.

 */
        weekly_days?: string;
    };
    /** The email address or user ID of the user to schedule a webinar for. */
    schedule_for?: string;
    /** Create webinar settings. */
    settings?: {
        /** Add additional webinar [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](/docs/api/references/abbreviations/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).

For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing.

To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field. */
        additional_data_center_regions?: string[];
        /** Allow attendees to join from multiple devices. */
        allow_multiple_devices?: boolean;
        /** Alternative host emails or IDs. Multiple values separated by comma. */
        alternative_hosts?: string;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** The default value is `2`. To enable registration required, set the approval type to `0` or `1`.  Values include:  
 

`0` - Automatically approve.  
 `1` - Manually approve.  
 `2` - No registration required. */
        approval_type?: 0 | 1 | 2;
        /** Send reminder email to attendees and panelists. */
        attendees_and_panelists_reminder_email_notification?: {
            /** * `true` -  Send reminder email to attendees and panelists.

* `false` - Do not send reminder email to attendees and panelists. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 hour before webinar.  
 `2` - Send 1 day before webinar.  
 `3` - Send 1 hour and 1 day before webinar.  
 `4` - Send 1 week before webinar.  
 `5` - Send 1 hour and 1 week before webinar.  
 `6` - Send 1 day and 1 week before webinar.  
 `7` - Send 1 hour, 1 day and 1 week before webinar. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Determine how participants can join the audio portion of the meeting.(Not supported for simulive webinar.) */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference information. */
        audio_conference_info?: string;
        /** Meeting authentication domains. This option allows you to specify the rule so that Zoom users whose email address contains a certain domain can join the webinar. You can either provide multiple comma-separated domains, use a wildcard for listing domains, or use both methods. */
        authentication_domains?: string;
        /** Specify the authentication type for users to join a webinar with `meeting_authentication` setting set to `true`. The value of this field can be retrieved from the `id` field within `authentication_options` array in the response of [**Get user settings**](/docs/api/rest/reference/zoom-api/methods#operation/userSettings) API. */
        authentication_option?: string;
        /** Automatic recording. Not supported for simulive webinar.   
 `local` - Record on local.  
 `cloud` -  Record on cloud.  
 `none` - Disabled. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Close registration after event date. */
        close_registration?: boolean;
        /** Contact email for registration */
        contact_email?: string;
        /** Contact name for registration */
        contact_name?: string;
        /** Set the email language.
`en-US`,`de-DE`,`es-ES`,`fr-FR`,`id-ID`,`jp-JP`,`nl-NL`,`pl-PL`,`pt-PT`,`ru-RU`,`tr-TR`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`. */
        email_language?: string;
        /** Only signed-in users can join this meeting. 

**This field is deprecated and will not be supported in future.**   
   
  Instead of this field, use the `meeting_authentication`, `authentication_option`, or `authentication_domains` fields to establish the authentication mechanism for this Webinar.  */
        enforce_login?: boolean;
        /** Only signed-in users with specified domains can join meetings.

**This field is deprecated and will not be supported in future.**   
 
  Instead of this field, use the `authentication_domains` field for this webinar.  */
        enforce_login_domains?: string;
        /** Send follow-up email to absentees. */
        follow_up_absentees_email_notification?: {
            /** * `true` - Send follow-up email to absentees.

* `false` - Do not send follow-up email to absentees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 days after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Send follow-up email to attendees. */
        follow_up_attendees_email_notification?: {
            /** * `true`: Send follow-up email to attendees.

* `false`: Do not send follow-up email to attendees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 day after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** List of global dial-in countries */
        global_dial_in_countries?: string[];
        /** Default to HD video. Not supported for simulive webinar. */
        hd_video?: boolean;
        /** Whether HD video for attendees is enabled. This value defaults to `false`. Not supported for simulive webinar. */
        hd_video_for_attendees?: boolean;
        /** Start video when host joins webinar. Not supported for simulive webinar. */
        host_video?: boolean;
        /** The webinar's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. This is not supported for simulive webinars. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the webinar. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the webinar's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The webinar's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the webinar. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the webinar's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/rest/reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** Require panelists to authenticate to join. If not provided, the default value will be based on the user's setting. */
        panelist_authentication?: boolean;
        /** Only [authenticated](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) users can join meeting if the value of this field is set to `true`. */
        meeting_authentication?: boolean;
        /** Add watermark that identifies the viewing participant. Not supported for simulive webinar. If not provided, the default value will be based on the user's setting. */
        add_watermark?: boolean;
        /** Add audio watermark that identifies the participants. Not supported for simulive webinar. If not provided, the default value will be based on the user's setting. */
        add_audio_watermark?: boolean;
        /** Make the webinar on-demand. Not supported for simulive webinar. */
        on_demand?: boolean;
        /** Send invitation email to panelists. If `false`, do not send invitation email to panelists. */
        panelists_invitation_email_notification?: boolean;
        /** Start video when panelists join webinar. Not supported for simulive webinar. */
        panelists_video?: boolean;
        /** Zoom will open a survey page in attendees' browsers after leaving the webinar */
        post_webinar_survey?: boolean;
        /** Enable practice session. */
        practice_session?: boolean;
        /** [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar. */
        question_and_answer?: {
            /** * `true` - Allow participants to submit questions.

* `false` - Do not allow submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists..

* `false` - Do not allow anonymous questions.(Not supported for simulive webinar.) */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want attendees to be able to view answered questions only or view all questions.

* `only` - Attendees are able to view answered questions only.

*  `all` - Attendees are able to view all questions submitted in the Q&amp;A. */
            answer_questions?: 'only' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can not answer questions or leave a comment in the question thread */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can click the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can not click the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
            /** If simulive webinar, 

* `true` - allow auto-reply to attendees. 

* `false` - don't allow auto-reply to the attendees. */
            allow_auto_reply?: boolean;
            /** If `allow_auto_reply` = true, the text to be included in the automatic response.  */
            auto_reply_text?: string;
            /** * `true` - Enable [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.

* `false` - Disable Q&amp;A for webinar. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
        };
        /** Send confirmation email to registrants. */
        registrants_confirmation_email?: boolean;
        /** Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field. */
        registrants_email_notification?: boolean;
        /** Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number. */
        registrants_restrict_number?: number;
        /** Registration types. Only used for recurring webinars with a fixed time.  
 `1` - Attendees register once and can attend any of the webinar sessions.  
 `2` - Attendees need to register for each session in order to attend.  
 `3` - Attendees register once and can choose one or more sessions to attend. */
        registration_type?: 1 | 2 | 3;
        /** Whether to always send 1080p video to attendees. This value defaults to `false`.(Not supported for simulive webinar.) */
        send_1080p_video_to_attendees?: boolean;
        /** Show social share buttons on the registration page. */
        show_share_button?: boolean;
        /** Whether to show the webinar's join information on the registration confirmation page. This setting is only applied to webinars with registration enabled. */
        show_join_info?: boolean;
        /** Survey URL for post webinar survey. */
        survey_url?: string;
        /** Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts set Virtual Background and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers. */
        enable_session_branding?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. Not supported for simulive webinar. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and cohosts to fully control the mute state of participants. Not supported for simulive webinar. If not provided, the default value will be based on the user's setting. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to include guest's email addresses in webinars' attendee reports. */
        email_in_attendee_report?: boolean;
    };
    /** Webinar start time. We support two formats for `start_time` - local time and GMT.  
  

To set time as GMT the format should be `yyyy-MM-dd`T`HH:mm:ssZ`.

To set time using a specific timezone, use `yyyy-MM-dd`T`HH:mm:ss` format and specify the timezone [ID](/docs/api/references/abbreviations/#timezones) in the `timezone` field OR leave it blank and the timezone set on your Zoom account will be used. You can also set the time as UTC as the timezone field.

The `start_time` should only be used for scheduled and / or recurring webinars with fixed time. */
    start_time?: string;
    /** The webinar template ID to schedule a webinar using a [webinar template](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates) or a [admin webinar template](https://support.zoom.us/hc/en-us/articles/8137753618957-Configuring-admin-webinar-templates). For a list of webinar templates, use the [**List webinar templates**](/docs/api/rest/reference/zoom-api/methods#operation/listWebinarTemplates) API. */
    template_id?: string;
    /** The timezone to assign to the `start_time` value. This field is only used for scheduled or recurring webinars with a fixed time.

For a list of supported timezones and their formats, see our [timezone list](/docs/api/references/abbreviations/#timezones). */
    timezone?: string;
    /** The webinar's topic. */
    topic?: string;
    /** Tracking fields. */
    tracking_fields?: {
        /** Tracking fields type. */
        field: string;
        /** Tracking fields value. */
        value?: string;
    }[];
    /** Webinar types.
 `5` - Webinar.  
 `6` - Recurring webinar with no fixed time.  
 `9` - Recurring webinar with a fixed time. */
    type?: 5 | 6 | 9;
    /** Whether to set the webinar to simulive. */
    is_simulive?: boolean;
    /** The previously recorded file's ID for `simulive`. */
    record_file_id?: string;
    /** Whether to transition a simulive webinar to live. The host must be present at the time of transition. */
    transition_to_live?: boolean;
    /** {"enable":false,"time":0,"timeunit":"second"} */
    simulive_delay_start?: {
        /** Whether simulive need delay playback. */
        enable?: boolean;
        /** The time for delayed playback
If the time unit is seconds, then the maximum value is 60 and the minimum value is 1.
If the time unit is minutes, then the maximum value is 10 and the minimum value is 1. */
        time?: number;
        /** The time unit for delayed playback
`second` - The time unit for delayed playback is seconds.
`minute` - The time unit for delayed playback is minutes. */
        timeunit?: 'second' | 'minute';
    };
};

/** Create a webinar - Response */
export type ZoomApi$Webinar$Create$Response = {
    /** Email address of the meeting host. */
    host_email?: string;
    /** ID of the user set as host of the webinar. */
    host_id?: string;
    /** Webinar ID in **long** format, represented as int64 data type in JSON. Also known as the webinar number. */
    id?: number;
    /** The webinar template's unique identifier. Use this field only if you would like to [schedule the webinar using an existing template](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates#schedule). The value of this field can be retrieved from [**List webinar templates**](/docs/api/rest/reference/zoom-api/methods#operation/listWebinarTemplates) API.
You must provide the user ID of the host instead of the email address in the `userId` path parameter in order to use a template for scheduling a Webinar. */
    template_id?: string;
    /** A webinar's unique identifier. Each webinar instance will generate its own UUID. Ror example, after a webinar ends, a new UUID is generated for the next instance of the webinar. Once a webinar ends, the value of the UUID for the same webinar will be different from when it was scheduled. */
    uuid?: string;
    /** The webinar's agenda. */
    agenda?: string;
    /** Creation time. */
    created_at?: string;
    /** The webinar's duration. */
    duration?: number;
    /** The URL that registrants can use to register for a webinar. This field is only returned for webinars that have enabled registration. */
    registration_url?: string;
    /** URL to join the webinar. Only share this URL with the users who should be invited to the webinar. */
    join_url?: string;
    /** Array of occurrence objects. */
    occurrences?: {
        /** Duration. */
        duration?: number;
        /** Occurrence ID: a unique identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. */
        occurrence_id?: string;
        /** Start time. */
        start_time?: string;
        /** Occurrence status. 
 `available` - Available occurrence.  
 `deleted` -  Deleted occurrence. */
        status?: 'available' | 'deleted';
    }[];
    /** The webinar passcode. By default, it can be up to 10 characters in length and may contain alphanumeric characters as well as special characters such as !, @, #, etc. */
    password?: string;
    /** Encrypted passcode for third party endpoints (H323/SIP). */
    encrypted_passcode?: string;
    /** H.323/SIP room system passcode. */
    h323_passcode?: string;
    /** Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.  */
    recurrence?: {
        /** A date when the webinar will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Can't be used with `end_times`. */
        end_date_time?: string;
        /** How many times the webinar will recur before it is canceled. The maximum number of recurring is 60. Can't be used with `end_date_time`. */
        end_times?: number;
        /** Use this field **only if you're scheduling a recurring webinar of type** `3` to state which day in a month the webinar should recur. The value range is from 1 to 31.

For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`. */
        monthly_day?: number;
        /** Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.**   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field.   
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** Define the interval when the webinar should recur. For instance, if you would like to schedule a Webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`. 

For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months. */
        repeat_interval?: number;
        /** Recurrence webinar types. 
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** Use this field **only if you're scheduling a recurring webinar of type** `2` to state which day(s) of the week the webinar should repeat.   
  The value for this field could be a number between `1` to `7` in string format. For instance, if the Webinar should recur on Sunday, provide `1` as the value of this field.

**Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the webinar should recur on Sundays and Tuesdays, provide `1,3` as the value of this field.

  
 `1` - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday.

 */
        weekly_days?: string;
    };
    /** Webinar settings. */
    settings?: {
        /** Add additional webinar [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](/docs/api/references/abbreviations/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).

For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing.

To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field. */
        additional_data_center_regions?: string[];
        /** Allow attendees to join from multiple devices. */
        allow_multiple_devices?: boolean;
        /** Alternative host emails or IDs. Multiple values separated by comma. */
        alternative_hosts?: string;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** `0` - Automatically approve.  
 `1` - Manually approve.  
 `2` - No registration required. */
        approval_type?: 0 | 1 | 2;
        /** Send reminder email to attendees and panelists. */
        attendees_and_panelists_reminder_email_notification?: {
            /** * `true` - Send reminder email to attendees and panelists.

* `false` - Do not send reminder email to attendees and panelists. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 hour before webinar.  
 `2` - Send 1 day before webinar.  
 `3` - Send 1 hour and 1 day before webinar.  
 `4` - Send 1 week before webinar.  
 `5` - Send 1 hour and 1 week before webinar.  
 `6` - Send 1 day and 1 week before webinar.  
 `7` - Send 1 hour, 1 day and 1 week before webinar. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Determine how participants can join the audio portion of the webinar. */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference info. */
        audio_conference_info?: string;
        /** If user has configured [**Sign Into Zoom with Specified Domains**](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated. */
        authentication_domains?: string;
        /** Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f). */
        authentication_name?: string;
        /** Webinar authentication option ID. */
        authentication_option?: string;
        /** Automatic recording. 
 `local` - Record on local.  
 `cloud` -  Record on cloud.  
 `none` - Disabled. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Close registration after event date. */
        close_registration?: boolean;
        /** Contact email for registration */
        contact_email?: string;
        /** Contact name for registration */
        contact_name?: string;
        /** Set the email language.
`en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`. */
        email_language?: string;
        /** Only signed in users can join this meeting.

**This field is deprecated and will not be supported in the future.**

 As an alternative, use the `meeting_authentication`, `authentication_option` and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar. */
        enforce_login?: boolean;
        /** Only signed in users with specified domains can join meetings.

**This field is deprecated and will not be supported in the future.**

 As an alternative, use the `meeting_authentication`, `authentication_option` and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar. */
        enforce_login_domains?: string;
        /** Send follow-up email to absentees. */
        follow_up_absentees_email_notification?: {
            /** * `true` - Send follow-up email to absentees.

* `false` - Do not send follow-up email to absentees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 days after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Send follow-up email to attendees. */
        follow_up_attendees_email_notification?: {
            /** * `true` - Send follow-up email to attendees.

* `false` - Do not send follow-up email to attendees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 day after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** List of global dial-in countries */
        global_dial_in_countries?: string[];
        /** A list of available dial-in numbers for different countries or regions. */
        global_dial_in_numbers?: {
            /** City of the number. */
            city?: string;
            /** The country code. */
            country?: string;
            /** Full name of country. */
            country_name?: string;
            /** Dial-in phone number. */
            number?: string;
            /** Dial-in number type. */
            type?: 'toll' | 'tollfree' | 'premium';
        }[];
        /** Default to HD video. */
        hd_video?: boolean;
        /** Whether HD video for attendees is enabled. */
        hd_video_for_attendees?: boolean;
        /** Start video when host joins webinar. */
        host_video?: boolean;
        /** The webinar's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. This is not supported for simulive webinars. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the webinar. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the webinar's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The webinar's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the webinar. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
            /** Information about the webinar's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/rest/reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** Require panelists to authenticate to join. If not provided, the default value will be based on the user's setting. */
        panelist_authentication?: boolean;
        /** Only authenticated users can join Webinar. */
        meeting_authentication?: boolean;
        /** Add watermark that identifies the viewing participant. If not provided, the default value will be based on the user's setting. */
        add_watermark?: boolean;
        /** Add audio watermark that identifies the participants. If not provided, the default value will be based on the user's setting. */
        add_audio_watermark?: boolean;
        /** Make the webinar on demand. */
        on_demand?: boolean;
        /** Send invitation email to panelists. If `false`, do not send invitation email to panelists. */
        panelists_invitation_email_notification?: boolean;
        /** Start video when panelists join the webinar. */
        panelists_video?: boolean;
        /** Zoom will open a survey page in attendees' browsers after leaving the webinar. */
        post_webinar_survey?: boolean;
        /** Enable practice session. */
        practice_session?: boolean;
        /** [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar. */
        question_and_answer?: {
            /** * `true` - Allow participants to submit questions.

* `false` - Do not allow submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists.

* `false` - Do not allow anonymous questions. */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want attendees to be able to view only answered questions, or view all questions.

* `only` - Attendees are able to view answered questions only.

* `all` - Attendees are able to view all questions submitted in the Q&amp;A. */
            answer_questions?: 'only' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can not answer questions or leave a comment in the question thread */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can click the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can not click the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
            /** If simulive webinar, 

* `true` - allow auto-reply to attendees. 

* `false` - don't allow auto-reply to the attendees. */
            allow_auto_reply?: boolean;
            /** If `allow_auto_reply` = true, the text to be included in the automatic response.  */
            auto_reply_text?: string;
            /** * `true`: Enable [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.

* `false`: Disable Q&amp;A for webinar. If not provided, the default value will be based on the user's setting. */
            enable?: boolean;
        };
        /** Send confirmation email to registrants. */
        registrants_confirmation_email?: boolean;
        /** Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field. */
        registrants_email_notification?: boolean;
        /** Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number. */
        registrants_restrict_number?: number;
        /** Registration types. Only used for recurring webinars with a fixed time.  
 `1` - Attendees register once and can attend any of the webinar sessions.  
 `2` - Attendees need to register for each session in order to attend.  
 `3` - Attendees register once and can choose one or more sessions to attend. */
        registration_type?: 1 | 2 | 3;
        /** Always send 1080p video to attendees. */
        send_1080p_video_to_attendees?: boolean;
        /** Show social share buttons on the registration page. */
        show_share_button?: boolean;
        /** Whether to show the webinar's join information on the registration confirmation page. This setting is only applied to webinars with registration enabled. */
        show_join_info?: boolean;
        /** Survey url for post webinar survey. */
        survey_url?: string;
        /** Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [Webinar Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers. */
        enable_session_branding?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. Not supported for simulive webinar. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and cohosts to fully control the mute state of participants. Not supported for simulive webinar. If not provided, the default value will be based on the user's setting. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to include guest's email addresses in attendee reports for webinars. */
        email_in_attendee_report?: boolean;
    };
    /** Webinar start time in GMT/UTC. */
    start_time?: string;
    /**   
 The `start_url` of a webinar is a URL using which a host or an alternative host can start the webinar. This URL should only be used by the host of the meeting and should not be shared with anyone other than the host of the webinar. 

The expiration time for the `start_url` field listed in the response of the [**Create a webinar**](/docs/api/rest/reference/zoom-api/methods#operation/webinarCreate) API is two hours for all regular users. 
	
For users created using the `custCreate` option via the [**Create users**](/docs/api/rest/reference/zoom-api/methods#operation/userCreate) API, the expiration time of the `start_url` field is 90 days.
	
For security reasons, to retrieve the latest value for the `start_url` field programmatically after expiry, call the [**Get a webinar**](/docs/api/rest/reference/zoom-api/methods#operation/webinar) API and refer to the value of the `start_url` field in the response.  
   
   
  */
    start_url?: string;
    /** Time zone to format `start_time`. */
    timezone?: string;
    /** The webinar's topic. */
    topic?: string;
    /** Tracking fields. */
    tracking_fields?: {
        /** Tracking fields type. */
        field?: string;
        /** Tracking fields value. */
        value?: string;
        /** Whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the webinar scheduling options in the Zoom Web Portal or not.

* `true` - Tracking field is visible.
* `false` - Tracking field is not visible to the users in the webinar options in the Zoom Web Portal but the field was used while scheduling this webinar via API. An invisible tracking field can be used by users while scheduling webinars via API only.  */
        visible?: boolean;
    }[];
    /** Webinar types.  
 `5` - Webinar.  
 `6` - Recurring webinar with no fixed time.  
 `9` - Recurring webinar with a fixed time. */
    type?: 5 | 6 | 9;
    /** Whether the webinar is `simulive`. */
    is_simulive?: boolean;
    /** The previously recorded file's ID for `simulive`. */
    record_file_id?: string;
    /** Whether to transition a simulive webinar to live. The host must be present at the time of transition. */
    transition_to_live?: boolean;
    /** {"enable":false,"time":0,"timeunit":"second"} */
    simulive_delay_start?: {
        /** Whether simulive need delay playback. */
        enable?: boolean;
        /** The time for delayed playback. */
        time?: number;
        /** The time unit for delayed playback. */
        timeunit?: string;
    };
    /** The platform through which the meeting was created.
     * `other` - Created through another platform.
     * `open_api` - Created through Open API.
     * `web_portal` - Created through the web portal. */
    creation_source?: 'other' | 'open_api' | 'web_portal';
};

/** Delete a webinar - Query parameters */
export type ZoomApi$Webinar$Delete$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
    /** `true` - Notify panelists and registrants about the webinar cancellation via email. 

`false` - Do not send any email notification to webinar registrants and panelists. 

The default value of this field is `false`. */
    cancel_webinar_reminder: boolean;
}>;

/** Create webinar's invite links - Request body */
export type ZoomApi$Webinar$Invite$Links$Create$Request = {
    /** The attendees list. */
    attendees?: {
        /** User display name. */
        name: string;
        /** Whether to disable participant video when joining the meeting. If not provided or set to `false`, the participant video will follow the meeting's default settings. */
        disable_video?: boolean;
        /** Whether to disable participant audio when joining the meeting. If not provided or set to `false`, the participant audio will follow the meeting's default settings. */
        disable_audio?: boolean;
    }[];
    /** The invite link's expiration time, in seconds. 

This value defaults to `7200`. */
    ttl?: number;
};

/** Create webinar's invite links - Response */
export type ZoomApi$Webinar$Invite$Links$Create$Response = {
    /** The attendee list. */
    attendees?: {
        /** The URL to join the meeting. */
        join_url?: string;
        /** The user's display name. */
        name?: string;
    }[];
};

/** Update live stream status - Request body */
export type ZoomApi$Webinar$Live$Stream$Status$Update$Request = {
    /** Update the live stream's status. 

* `start` - Start a webinar live stream.

* `stop`- Stop an ongoing webinar live stream. */
    action?: 'start' | 'stop';
    /** Update the live stream session's settings.  **Only** settings for a stopped live stream can be updated. */
    settings?: {
        /** Display the name of the active speaker during a live stream. */
        active_speaker_name?: boolean;
        /** Display the live stream's name. */
        display_name?: string;
    };
};

/** Update a live stream - Request body */
export type ZoomApi$Webinar$Live$Stream$Update$Request = {
    /** The webinar live stream page's URL. */
    page_url: string;
    /** The webinar live stream name and key. */
    stream_key: string;
    /** The webinar live stream URL. */
    stream_url: string;
    /** The number of pixels in each dimension that the video camera can display, required when a user enables 1080p. Use a value of `720p` or `1080p` */
    resolution?: string;
};

/** Get a webinar's join token for live streaming - Response */
export type ZoomApi$Webinar$Live$Streaming$Join$Token$Response = {
    /** The number of seconds the join token is valid for before it expires. This value always returns `120`. */
    expire_in?: 120;
    /** The join token. */
    token?: string;
};

/** Get a webinar's archive token for local archiving - Response */
export type ZoomApi$Webinar$Local$Archiving$Archive$Token$Response = {
    /** The number of seconds the archive token is valid for before it expires. This value always returns `120`. */
    expire_in?: 120;
    /** The archive token. */
    token?: string;
};

/** Get a webinar's join token for local recording - Response */
export type ZoomApi$Webinar$Local$Recording$Join$Token$Response = {
    /** The number of seconds the join token is valid for before it expires. This value always returns `120`. */
    expire_in?: 120;
    /** The join token. */
    token?: string;
};

/** Add panelists - Request body */
export type ZoomApi$Webinar$Panelist$Create$Request = {
    /** List of panelist objects. */
    panelists?: ({
        /** Panelist's email. See the [email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
        email?: string;
        /** The panelist's full name.

**Note:** This value cannot exceed more than 12 Chinese characters. */
        name?: string;
    } & {
        /** The virtual background ID to bind. */
        virtual_background_id?: string;
        /** The name tag ID to bind. */
        name_tag_id?: string;
        /** The panelist's name to display in the name tag. */
        name_tag_name?: string;
        /** The pronouns to display in the name tag. */
        name_tag_pronouns?: string;
        /** The description for the name tag, such the person's title. */
        name_tag_description?: string;
    })[];
};

/** Add panelists - Response */
export type ZoomApi$Webinar$Panelist$Create$Response = {
    /** Webinar ID. */
    id?: string;
    /** The time when the panelist was added. */
    updated_at?: string;
};

/** List panelists - Response */
export type ZoomApi$Webinar$Panelists$Response = {
    /** List of panelist objects. */
    panelists?: ({
        /** Panelist's ID. */
        id?: string;
    } & {
        /** Panelist's email. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
        email?: string;
        /** The panelist's full name.

**Note** This value cannot exceed more than 12 Chinese characters. */
        name?: string;
    } & {
        /** Join URL. */
        join_url?: string;
    } & {
        /** The virtual background's ID. */
        virtual_background_id?: string;
        /** The name tag ID to bind. */
        name_tag_id?: string;
        /** The panelist's name to display in the name tag. */
        name_tag_name?: string;
        /** The pronouns to display in the name tag. */
        name_tag_pronouns?: string;
        /** The description for the name tag, such as the person's title. */
        name_tag_description?: string;
    })[];
    /** Total records. */
    total_records?: number;
};

/** Get a webinar - Query parameters */
export type ZoomApi$Webinar$Params = Partial<{
    /** Unique identifier for an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. When you create a recurring Webinar using [**Create a webinar**](/docs/api-reference/zoom-api/methods#operation/webinarCreate) API, you can retrieve the Occurrence ID from the response of the API call. */
    occurrence_id: string;
    /** Set the value of this field to `true` to view webinar details of all previous occurrences of a recurring webinar. */
    show_previous_occurrences: boolean;
}>;

/** Create a webinar's poll - Request body */
export type ZoomApi$Webinar$Poll$Create$Request = {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The type of poll. 
* `1` - Poll. 
* `2` - Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` - Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** The information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls. 
* `true` - The answer is case-sensitive. 
* `false` - The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type.
         * `single` - Single choice.
         * `multiple` - Multiple choice.
         * `matching` - Matching.
         * `rank_order` - Rank order.
         * `short_answer` - Short answer.
         * `long_answer` - Long answer.
         * `fill_in_the_blank` - Fill in the blank.
         * `rating_scale` - Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** Create a webinar's poll - Response */
export type ZoomApi$Webinar$Poll$Create$Response = {
    /** The webinar poll ID. */
    id?: string;
    /** The status of the webinar poll:  
 `notstart` - Poll not started  
 `started` - Poll started  
 `ended` - Poll ended  
 `sharing` - Sharing poll results */
    status?: 'notstart' | 'started' | 'ended' | 'sharing';
} & {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The type of poll. 
* `1` - Poll. 
* `2` - Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` - Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** The information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls. 
* `true` - The answer is case-sensitive. 
* `false` - The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type.
         * `single` - Single choice.
         * `multiple` - Multiple choice.
         * `matching` - Matching.
         * `rank_order` - Rank order.
         * `short_answer` - Short answer.
         * `long_answer` - Long answer.
         * `fill_in_the_blank` - Fill in the blank.
         * `rating_scale` - Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** Get a webinar poll - Response */
export type ZoomApi$Webinar$Poll$Get$Response = {
    /** The webinar poll ID. */
    id?: string;
    /** The status of the webinar poll:
`notstart` - Poll not started
`started` - Poll started
`ended` - Poll ended
`sharing` - Sharing poll results
`deactivated` - Poll deactivated */
    status?: 'notstart' | 'started' | 'ended' | 'sharing' | 'deactivated';
} & {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The type of poll: 
* `1` &mdash; Poll. 
* `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` &mdash; Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** The information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question: 
* `true` &mdash; The participant must answer the question. 
* `false` &mdash; The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box: 
* `true` &mdash; Show as a drop-down box. 
* `false` &mdash; Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type:
         * `single` &mdash; Single choice.
         * `multiple` &mdash; Multiple choice.
         * `matching` &mdash; Matching.
         * `rank_order` &mdash; Rank order.
         * `short_answer` &mdash; Short answer.
         * `long_answer` &mdash; Long answer.
         * `fill_in_the_blank` &mdash; Fill in the blank.
         * `rating_scale` &mdash; Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** Update a webinar poll - Request body */
export type ZoomApi$Webinar$Poll$Update$Request = {
    /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
    anonymous?: boolean;
    /** The type of poll: 
* `1` &mdash; Poll. 
* `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` &mdash; Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
    poll_type?: 1 | 2 | 3;
    /** The information about the poll's questions. */
    questions?: {
        /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * For `short_answer` polls, a maximum of 500 characters.
         * For `long_answer` polls, a maximum of 2,000 characters. */
        answer_max_character?: number;
        /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
        answer_min_character?: number;
        /** Whether participants must answer the question: 
* `true` &mdash; The participant must answer the question. 
* `false` &mdash; The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
        answer_required?: boolean;
        /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
        answers?: string[];
        /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
        case_sensitive?: boolean;
        /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
        name?: string;
        /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
        prompts?: {
            /** The question prompt's title. */
            prompt_question?: string;
            /** The question prompt's correct answers:
             * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
             * For `rank_order` polls, you can only provide one correct answer. */
            prompt_right_answers?: string[];
        }[];
        /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_max_label?: string;
        /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
        rating_max_value?: number;
        /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
        rating_min_label?: string;
        /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
        rating_min_value?: number;
        /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
        right_answers?: string[];
        /** Whether to display the radio selection as a drop-down box: 
* `true` &mdash; Show as a drop-down box. 
* `false` &mdash; Do not show as a drop-down box. 

This value defaults to `false`. */
        show_as_dropdown?: boolean;
        /** The poll's question and answer type:
         * `single` &mdash; Single choice.
         * `multiple` &mdash; Multiple choice.
         * `matching` &mdash; Matching.
         * `rank_order` &mdash; Rank order.
         * `short_answer` &mdash; Short answer.
         * `long_answer` &mdash; Long answer.
         * `fill_in_the_blank` &mdash; Fill in the blank.
         * `rating_scale` &mdash; Rating scale. */
        type?:
            | 'single'
            | 'multiple'
            | 'matching'
            | 'rank_order'
            | 'short_answer'
            | 'long_answer'
            | 'fill_in_the_blank'
            | 'rating_scale';
    }[];
    /** The poll's title, up to 64 characters. */
    title?: string;
};

/** List a webinar's polls  - Query parameters */
export type ZoomApi$Webinar$Polls$Params = Partial<{
    /** Whether to query for polls with the **Anonymous** option enabled:
     * `true` &mdash; Query for polls with the **Anonymous** option enabled.
     * `false` &mdash; Do not query for polls with the **Anonymous** option enabled. */
    anonymous: boolean;
}>;

/** List a webinar's polls  - Response */
export type ZoomApi$Webinar$Polls$Response = {
    /** An array of polls. */
    polls?: ({
        /** The poll ID. */
        id?: string;
        /** The status of the webinar poll:
`notstart` - Poll not started
`started` - Poll started
`ended` - Poll ended
`sharing` - Sharing poll results
`deactivated` - Poll deactivated */
        status?: 'notstart' | 'started' | 'ended' | 'sharing' | 'deactivated';
    } & {
        /** Whether meeting participants answer poll questions anonymously. 

This value defaults to `false`. */
        anonymous?: boolean;
        /** The type of poll: 
* `1` &mdash; Poll. 
* `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account. 
* `3` &mdash; Quiz. This feature must be enabled in your Zoom account. 

 This value defaults to `1`. */
        poll_type?: 1 | 2 | 3;
        /** The information about the poll's questions. */
        questions?: {
            /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
             * For `short_answer` polls, a maximum of 500 characters.
             * For `long_answer` polls, a maximum of 2,000 characters. */
            answer_max_character?: number;
            /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value. */
            answer_min_character?: number;
            /** Whether participants must answer the question: 
* `true` &mdash; The participant must answer the question. 
* `false` &mdash; The participant does not need to answer the question. 

**Note:** 
* When the poll's `type` value is `1` (Poll), this value defaults to `true`. 
* When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`. */
            answer_required?: boolean;
            /** The poll question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` polls, you can only provide a maximum of 10 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
            answers?: string[];
            /** Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls: 
* `true` &mdash; The answer is case-sensitive. 
* `false` &mdash; The answer is not case-sensitive. 

This value defaults to `false`. */
            case_sensitive?: boolean;
            /** The poll question, up to 1024 characters. 

For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values. */
            name?: string;
            /** The information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
                /** The question prompt's correct answers:
                 * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
                 * For `rank_order` polls, you can only provide one correct answer. */
                prompt_right_answers?: string[];
            }[];
            /** The high score label for the `rating_max_value` field. 

This field only applies to the `rating_scale` poll. */
            rating_max_label?: string;
            /** The rating scale's maximum value, up to a maximum value of 10. 

This field only applies to the `rating_scale` poll. */
            rating_max_value?: number;
            /** The low score label for the `rating_min_value` field. 

This field only applies to the `rating_scale` poll. */
            rating_min_label?: string;
            /** The rating scale's minimum value. This value cannot be less than zero. 

This field only applies to the `rating_scale` poll. */
            rating_min_value?: number;
            /** The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz). 

 For `single` and `matching` polls, this field only accepts one answer. */
            right_answers?: string[];
            /** Whether to display the radio selection as a drop-down box: 
* `true` &mdash; Show as a drop-down box. 
* `false` &mdash; Do not show as a drop-down box. 

This value defaults to `false`. */
            show_as_dropdown?: boolean;
            /** The poll's question and answer type:
             * `single` &mdash; Single choice.
             * `multiple` &mdash; Multiple choice.
             * `matching` &mdash; Matching.
             * `rank_order` &mdash; Rank order.
             * `short_answer` &mdash; Short answer.
             * `long_answer` &mdash; Long answer.
             * `fill_in_the_blank` &mdash; Fill in the blank.
             * `rating_scale` &mdash; Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
        }[];
        /** The poll's title, up to 64 characters. */
        title?: string;
    })[];
    /** The number of all records available across pages. */
    total_records?: number;
};

/** Add a webinar registrant - Query parameters */
export type ZoomApi$Webinar$Registrant$Create$Params = Partial<{
    /** A comma-separated list of webinar occurrence IDs. Get this value with the [Get a webinar](/docs/api/rest/reference/zoom-api/methods/#operation/webinar) API. Make sure the `registration_type` is 3 if updating multiple occurrences with this API. */
    occurrence_ids: string;
}>;

/** Add a webinar registrant - Request body */
export type ZoomApi$Webinar$Registrant$Create$Request = {
    /** The registrant's first name. */
    first_name: string;
    /** The registrant's last name. */
    last_name?: string;
    /** The registrant's email address. */
    email: string;
    /** The registrant's address. */
    address?: string;
    /** The registrant's city. */
    city?: string;
    /** The registrant's state or province. */
    state?: string;
    /** The registrant's ZIP or postal code. */
    zip?: string;
    /** The registrant's two-letter [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). */
    country?: string;
    /** The registrant's phone number. */
    phone?: string;
    /** The registrant's questions and comments. */
    comments?: string;
    /** Information about custom questions. */
    custom_questions?: {
        /** The custom question's title. */
        title?: string;
        /** The custom question's response value. This has a limit of 128 characters. */
        value?: string;
    }[];
    /** The registrant's industry. */
    industry?: string;
    /** The registrant's job title. */
    job_title?: string;
    /** The registrant's number of employees:
     * `1-20`
     * `21-50`
     * `51-100`
     * `101-500`
     * `500-1,000`
     * `1,001-5,000`
     * `5,001-10,000`
     * `More than 10,000` */
    no_of_employees?:
        | ''
        | '1-20'
        | '21-50'
        | '51-100'
        | '101-500'
        | '500-1,000'
        | '1,001-5,000'
        | '5,001-10,000'
        | 'More than 10,000';
    /** The registrant's organization. */
    org?: string;
    /** The registrant's purchasing time frame:
     * `Within a month`
     * `1-3 months`
     * `4-6 months`
     * `More than 6 months`
     * `No timeframe` */
    purchasing_time_frame?:
        | ''
        | 'Within a month'
        | '1-3 months'
        | '4-6 months'
        | 'More than 6 months'
        | 'No timeframe';
    /** The registrant's role in the purchase process:
     * `Decision Maker`
     * `Evaluator/Recommender`
     * `Influencer`
     * `Not involved` */
    role_in_purchase_process?:
        | ''
        | 'Decision Maker'
        | 'Evaluator/Recommender'
        | 'Influencer'
        | 'Not involved';
    /** Specifies the registrant's preferred language for the confirmation email sent upon successful registration.

**Note** This field is only effective if the webinar's 'Select Email Language' setting is set to 'Same as recipients' default language' in the Zoom web portal. If a fixed language is selected, this value will be ignored.

**Supported values**

* `en-US` - English (US)
* `de-DE` - German (Germany)
* `es-ES` - Spanish (Spain)
* `fr-FR` - French (France)
* `jp-JP` - Japanese
* `pt-PT` - Portuguese (Portugal)
* `ru-RU` - Russian
* `zh-CN` - Chinese (PRC)
* `zh-TW` - Chinese (Taiwan)
* `ko-KO` - Korean
* `it-IT` - Italian (Italy)
* `vi-VN` - Vietnamese
* `pl-PL` - Polish
* `Tr-TR` - Turkish */
    language?:
        | 'en-US'
        | 'de-DE'
        | 'es-ES'
        | 'fr-FR'
        | 'jp-JP'
        | 'pt-PT'
        | 'ru-RU'
        | 'zh-CN'
        | 'zh-TW'
        | 'ko-KO'
        | 'it-IT'
        | 'vi-VN'
        | 'pl-PL'
        | 'Tr-TR';
    /** The tracking source's unique identifier. */
    source_id?: string;
};

/** Add a webinar registrant - Response */
export type ZoomApi$Webinar$Registrant$Create$Response = {
    /** The webinar's ID. */
    id?: number;
    /** The URL the registrant can use to join the webinar. */
    join_url?: string;
    /** The registrant's ID. */
    registrant_id?: string;
    /** The webinar's start time. */
    start_time?: string;
    /** The webinar's topic. */
    topic?: string;
    /** Array of occurrence objects. */
    occurrences?: {
        /** Duration. */
        duration?: number;
        /** Occurrence ID: Unique identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. */
        occurrence_id?: string;
        /** Start time. */
        start_time?: string;
        /** Occurrence status. */
        status?: string;
    }[];
};

/** Get a webinar registrant - Query parameters */
export type ZoomApi$Webinar$Registrant$Get$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
}>;

/** Get a webinar registrant - Response */
export type ZoomApi$Webinar$Registrant$Get$Response = {
    id?: string;
} & {
    /** The registrant's address. */
    address?: string;
    /** The registrant's city. */
    city?: string;
    /** The registrant's questions and comments. */
    comments?: string;
    /** The registrant's two-letter ISO [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). */
    country?: string;
    /** Information about custom questions. */
    custom_questions?: {
        /** The title of the custom question. */
        title?: string;
        /** The custom question's response value. This has a limit of 128 characters. */
        value?: string;
    }[];
    /** The registrant's email address. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
    email: string;
    /** The registrant's first name. */
    first_name: string;
    /** The registrant's industry. */
    industry?: string;
    /** The registrant's job title. */
    job_title?: string;
    /** The registrant's last name. */
    last_name?: string;
    /** The registrant's number of employees:
     * `1-20`
     * `21-50`
     * `51-100`
     * `101-250`
     * `251-500`
     * `501-1,000`
     * `1,001-5,000`
     * `5,001-10,000`
     * `More than 10,000` */
    no_of_employees?:
        | ''
        | '1-20'
        | '21-50'
        | '51-100'
        | '101-250'
        | '251-500'
        | '501-1,000'
        | '1,001-5,000'
        | '5,001-10,000'
        | 'More than 10,000';
    /** The registrant's organization. */
    org?: string;
    /** The registrant's phone number. */
    phone?: string;
    /** The registrant's purchasing time frame:
     * `Within a month`
     * `1-3 months`
     * `4-6 months`
     * `More than 6 months`
     * `No timeframe` */
    purchasing_time_frame?:
        | ''
        | 'Within a month'
        | '1-3 months'
        | '4-6 months'
        | 'More than 6 months'
        | 'No timeframe';
    /** The registrant's role in the purchase process:
     * `Decision Maker`
     * `Evaluator/Recommender`
     * `Influencer`
     * `Not involved` */
    role_in_purchase_process?:
        | ''
        | 'Decision Maker'
        | 'Evaluator/Recommender'
        | 'Influencer'
        | 'Not involved';
    /** The registrant's state or province. */
    state?: string;
    /** The registrant's status:
     * `approved` &mdash; Registrant is approved.
     * `denied` &mdash; Registrant is denied.
     * `pending` &mdash; Registrant is waiting for approval. */
    status?: 'approved' | 'denied' | 'pending';
    /** The registrant's ZIP or postal code. */
    zip?: string;
} & {
    /** The registrant's language preference for confirmation emails:
     * `en-US` &mdash; English (US)
     * `de-DE` &mdash; German (Germany)
     * `es-ES` &mdash; Spanish (Spain)
     * `fr-FR` &mdash; French (France)
     * `jp-JP` &mdash; Japanese
     * `pt-PT` &mdash; Portuguese (Portugal)
     * `ru-RU` &mdash; Russian
     * `zh-CN` &mdash; Chinese (PRC)
     * `zh-TW` &mdash; Chinese (Taiwan)
     * `ko-KO` &mdash; Korean
     * `it-IT` &mdash; Italian (Italy)
     * `vi-VN` &mdash; Vietnamese
     * `pl-PL` &mdash; Polish
     * `Tr-TR` &mdash; Turkish */
    language?:
        | 'en-US'
        | 'de-DE'
        | 'es-ES'
        | 'fr-FR'
        | 'jp-JP'
        | 'pt-PT'
        | 'ru-RU'
        | 'zh-CN'
        | 'zh-TW'
        | 'ko-KO'
        | 'it-IT'
        | 'vi-VN'
        | 'pl-PL'
        | 'Tr-TR';
} & {
    create_time?: string;
    join_url?: string;
    status?: string;
};

/** Update registration questions - Request body */
export type ZoomApi$Webinar$Registrant$Question$Update$Request = {
    /** Array of custom questions for registrants. */
    custom_questions?: {
        /** An array of answer choices. Can't be used for short answer type. */
        answers?: string[];
        /** State whether or not a registrant is required to answer the custom question. */
        required?: boolean;
        /** Custom question. */
        title?: string;
        /** The question-answer type. */
        type?: 'short' | 'single_radio' | 'single_dropdown' | 'multiple';
    }[];
    /** Array of registration fields whose values should be provided by registrants. */
    questions?: {
        /** Field name */
        field_name?:
            | 'last_name'
            | 'address'
            | 'city'
            | 'country'
            | 'zip'
            | 'state'
            | 'phone'
            | 'industry'
            | 'org'
            | 'job_title'
            | 'purchasing_time_frame'
            | 'role_in_purchase_process'
            | 'no_of_employees'
            | 'comments';
        /** State whether the selected fields are required or optional. */
        required?: boolean;
    }[];
};

/** Update registrant's status - Query parameters */
export type ZoomApi$Webinar$Registrant$Status$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
}>;

/** Update registrant's status - Request body */
export type ZoomApi$Webinar$Registrant$Status$Request = {
    /** The registration action to perform.
     * `approve` - Approve the registrant.
     * `deny` - Reject the registrant.
     * `cancel` - Cancel the registrant's approval. */
    action: 'approve' | 'deny' | 'cancel';
    /** The registrant information. */
    registrants?: {
        /** The registrant's email address. */
        email?: string;
        /** The registrant's ID. */
        id?: string;
    }[];
};

/** List webinar registrants - Query parameters */
export type ZoomApi$Webinar$Registrants$Params = Partial<{
    /** The meeting or webinar occurrence ID. */
    occurrence_id: string;
    /** Query by the registrant's status.
     * `pending` - The registration is pending.
     * `approved` - The registrant is approved.
     * `denied` - The registration is denied. */
    status: 'pending' | 'approved' | 'denied';
    /** The tracking source ID for the registrants. Useful if you share the webinar registration page in multiple locations. See [Creating source tracking links for webinar registration](https://support.zoom.us/hc/en-us/articles/360000315683-Creating-source-tracking-links-for-webinar-registration) for details. */
    tracking_source_id: string;
    /** The number of records returned within a single API call. */
    page_size: number;
    /** **Deprecated** This field will be deprecated. We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number: number;
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token: string;
}>;

/** List registration questions - Response */
export type ZoomApi$Webinar$Registrants$Questions$Get$Response = {
    /** Array of Registrant Custom Questions. */
    custom_questions?: {
        /** An array of answer choices. Can't be used for short answer type. */
        answers?: string[];
        /** State whether or not the custom question is required to be answered by a registrant. */
        required?: boolean;
        /** Custom question. */
        title?: string;
        /** The question-answer type. */
        type?: 'short' | 'single_radio' | 'single_dropdown' | 'multiple';
    }[];
    /** Array of registration fields whose values should be provided by registrants during registration. */
    questions?: {
        /** Field name */
        field_name?:
            | 'last_name'
            | 'address'
            | 'city'
            | 'country'
            | 'zip'
            | 'state'
            | 'phone'
            | 'industry'
            | 'org'
            | 'job_title'
            | 'purchasing_time_frame'
            | 'role_in_purchase_process'
            | 'no_of_employees'
            | 'comments';
        /** State whether the selected fields are required or optional. */
        required?: boolean;
    }[];
};

/** List webinar registrants - Response */
export type ZoomApi$Webinar$Registrants$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** **Deprecated** This field will be deprecated. We will no longer support this field in a future release. Instead, use `next_page_token` for pagination. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** List of registrant objects. */
    registrants?: ({
        /** Registrant ID. */
        id?: string;
    } & {
        /** The registrant's address. */
        address?: string;
        /** The registrant's city. */
        city?: string;
        /** The registrant's questions and comments. */
        comments?: string;
        /** The registrant's two-letter ISO [country code](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#countries). */
        country?: string;
        /** Information about custom questions. */
        custom_questions?: {
            /** The title of the custom question. */
            title?: string;
            /** The custom question's response value. This has a limit of 128 characters. */
            value?: string;
        }[];
        /** The registrant's email address. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for return value details. */
        email: string;
        /** The registrant's first name. */
        first_name: string;
        /** The registrant's industry. */
        industry?: string;
        /** The registrant's job title. */
        job_title?: string;
        /** The registrant's last name. */
        last_name?: string;
        /** The registrant's number of employees.
         * `1-20`
         * `21-50`
         * `51-100`
         * `101-250`
         * `251-500`
         * `501-1,000`
         * `1,001-5,000`
         * `5,001-10,000`
         * `More than 10,000` */
        no_of_employees?:
            | ''
            | '1-20'
            | '21-50'
            | '51-100'
            | '101-250'
            | '251-500'
            | '501-1,000'
            | '1,001-5,000'
            | '5,001-10,000'
            | 'More than 10,000';
        /** The registrant's organization. */
        org?: string;
        /** The registrant's phone number. */
        phone?: string;
        /** The registrant's purchasing time frame.
         * `Within a month.`
         * `1-3 months.`
         * `4-6 months.`
         * `More than 6 months.`
         * `No timeframe.` */
        purchasing_time_frame?:
            | ''
            | 'Within a month'
            | '1-3 months'
            | '4-6 months'
            | 'More than 6 months'
            | 'No timeframe';
        /** The registrant's role in the purchase process.
         * `Decision maker`
         * `Evaluator/Recommender.`
         * `Influencer.`
         * `Not involved.` */
        role_in_purchase_process?:
            | ''
            | 'Decision Maker'
            | 'Evaluator/Recommender'
            | 'Influencer'
            | 'Not involved';
        /** The registrant's state or province. */
        state?: string;
        /** The registrant's status.
         * `approved` - Registrant is approved.
         * `denied` - Registrant is denied.
         * `pending` - Registrant is waiting for approval. */
        status?: 'approved' | 'denied' | 'pending';
        /** The registrant's ZIP or postal code. */
        zip?: string;
    } & {
        /** The time when the registrant registered. */
        create_time?: string;
        /** The URL that an approved registrant can use to join the meeting or webinar. */
        join_url?: string;
        /** The status of the registrant's registration.   
  `approved` - User has been successfully approved for the webinar.  
  `pending` -  The registration is still pending.  
  `denied` - User has been denied from joining the webinar. */
        status?: string;
    })[];
};

/** Get a webinar - Response */
export type ZoomApi$Webinar$Response = {
    /** The meeting host's email address. */
    host_email?: string;
    /** ID of the user set as host of webinar. */
    host_id?: string;
    /** The webinar ID in **long** format, represented as int64 data type in JSON, also known as the webinar number. */
    id?: number;
    /** The webinar template's unique identifier. Use this field only if you would like to [schedule the webinar using an existing template](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates#schedule). The value of this field can be retrieved from [**List webinar templates**](/docs/api/rest/reference/zoom-api/methods#operation/listWebinarTemplates) API.
You must provide the user ID of the host instead of the email address in the `userId` path parameter in order to use a template for scheduling a webinar. */
    template_id?: string;
    /** Unique webinar ID. Each webinar instance generates its own webinar UUID. After a webinar ends, a new UUID is generated for the next instance of the webinar. Retrieve a list of UUIDs from past webinar instances using the [**List past webinar instances**](/docs/api-reference/zoom-api/methods#operation/pastWebinars) API. [Double encode](/docs/api/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a `/` or contains `//` in it.

 */
    uuid?: string;
    /** Webinar agenda. */
    agenda?: string;
    /** Create time. */
    created_at?: string;
    /** Webinar duration. */
    duration?: number;
    /** The URL that registrants can use to register for a webinar. This field is only returned for webinars that have enabled registration. */
    registration_url?: string;
    /** URL to join the webinar. Only share this URL with the users who should be invited to the webinar. */
    join_url?: string;
    /** Array of occurrence objects. */
    occurrences?: {
        /** Duration. */
        duration?: number;
        /** The occurrence ID, a unique identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. */
        occurrence_id?: string;
        /** Start time. */
        start_time?: string;
        /** Occurrence status. 
 `available` - Available occurrence.  
 `deleted` -  Deleted occurrence. */
        status?: 'available' | 'deleted';
    }[];
    /** Webinar passcode. Passcode may only contain the characters [a-z A-Z 0-9 @ - _ * !]. Maximum of 10 characters.

If **Webinar Passcode** setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. 

 **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. 

 If the requirements are enabled, you can view those requirements by calling the [**Get account settings**](/docs/api/rest/reference/account/methods/#operation/accountSettings) API. */
    password?: string;
    /** Encrypted passcode for third party endpoints (H323/SIP). */
    encrypted_passcode?: string;
    /** H.323/SIP room system passcode. */
    h323_passcode?: string;
    /** Recurrence object. Use this object only for a webinar of type `9` - a recurring webinar with fixed time.  */
    recurrence?: {
        /** Select a date when the webinar will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Cannot be used with `end_times`. */
        end_date_time?: string;
        /** How many times the webinar will recur before it is canceled. The maximum number of recurring is 60. Cannot be used with `end_date_time`. */
        end_times?: number;
        /** Use this field **only if you're scheduling a recurring webinar of type** `3` to state which day in a month, the webinar should recur. The value range is from 1 to 31.

For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`. */
        monthly_day?: number;
        /** Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.**   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field.   
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** Define the interval when the webinar should recur. For instance, to schedule a webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`. 

For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months. */
        repeat_interval?: number;
        /** Recurrence webinar types.  
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** Use this field **only if you're scheduling a recurring webinar of type** `2` to state which days of the week the webinar should repeat.   
  The value for this field could be a number between `1` to `7` in string format. For instance, if the Webinar should recur on Sunday, provide `1` as the value of this field.    
   
  **Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the Webinar should recur on Sundays and Tuesdays provide `1,3` as the value of this field.

  
 `1`  - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday.

 */
        weekly_days?: string;
    };
    /** Webinar settings. */
    settings?: {
        /** Add more webinar [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](/docs/api/references/abbreviations/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).

For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing.

To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field. */
        additional_data_center_regions?: string[];
        /** Allow attendees to join from multiple devices. */
        allow_multiple_devices?: boolean;
        /** Alternative host emails or IDs. Multiple values separated by comma. */
        alternative_hosts?: string;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** `0` - Automatically approve.  
 `1` - Manually approve.  
 `2` - No registration required. */
        approval_type?: 0 | 1 | 2;
        /** Send reminder email to attendees and panelists. */
        attendees_and_panelists_reminder_email_notification?: {
            /** * `true` - Send reminder email to attendees and panelists.

* `false` - Do not send reminder email to attendees and panelists. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 hour before webinar.  
 `2` - Send 1 day before webinar.  
 `3` - Send 1 hour and 1 day before webinar.  
 `4` - Send 1 week before webinar.  
 `5` - Send 1 hour and 1 week before webinar.  
 `6` - Send 1 day and 1 week before webinar.  
 `7` - Send 1 hour, 1 day and 1 week before webinar. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Determine how participants can join the audio portion of the webinar. */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference info. */
        audio_conference_info?: string;
        /** If user has configured [**Sign Into Zoom with Specified Domains**](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated. */
        authentication_domains?: string;
        /** Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f). */
        authentication_name?: string;
        /** Webinar authentication option ID. */
        authentication_option?: string;
        /** Automatic recording. 
 `local` - Record on local.  
 `cloud` -  Record on cloud.  
 `none` - Disabled. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Close registration after event date. */
        close_registration?: boolean;
        /** Contact email for registration. */
        contact_email?: string;
        /** Contact name for registration. */
        contact_name?: string;
        /** Set the email language.
`en-US`, `de-DE`, `es-ES`, `fr-FR`, `jp-JP`, `pt-PT`, `ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, or `vi-VN`. */
        email_language?: string;
        /** Only signed in users can join this meeting.

**This field is deprecated and will not be supported in the future.**    

 As an alternative, use the `meeting_authentication`, `authentication_option` and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar. */
        enforce_login?: boolean;
        /** Only signed in users with specified domains can join meetings.

**This field is deprecated and will not be supported in the future.**    

 As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar. */
        enforce_login_domains?: string;
        /** Send follow-up email to absentees. */
        follow_up_absentees_email_notification?: {
            /** * `true` - Send follow-up email to absentees.

* `false` - Do not send follow-up email to absentees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 days after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Send follow-up email to attendees. */
        follow_up_attendees_email_notification?: {
            /** * `true` - Send follow-up email to attendees.

* `false` - Do not send follow-up email to attendees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 day after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** List of global dial-in countries. */
        global_dial_in_countries?: string[];
        /** A list of available dial-in numbers for different countries or regions. */
        global_dial_in_numbers?: {
            /** The number's city. */
            city?: string;
            /** The country code. */
            country?: string;
            /** Full name of country. */
            country_name?: string;
            /** Dial-in phone number. */
            number?: string;
            /** Dial-in number type. */
            type?: 'toll' | 'tollfree' | 'premium';
        }[];
        /** Default to HD video. */
        hd_video?: boolean;
        /** Whether HD video for attendees is enabled. */
        hd_video_for_attendees?: boolean;
        /** Start video when the host joins the webinar. */
        host_video?: boolean;
        /** The webinar's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. This is not supported for simulive webinars. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the webinar. */
            enable?: boolean;
            /** Information about the webinar's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The webinar's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the webinar. */
            enable?: boolean;
            /** Information about the webinar's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/api-reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** Require panelists to authenticate to join. */
        panelist_authentication?: boolean;
        /** Only authenticated users can join the webinar. */
        meeting_authentication?: boolean;
        /** Add watermark that identifies the viewing participant. */
        add_watermark?: boolean;
        /** Add audio watermark that identifies the participants. */
        add_audio_watermark?: boolean;
        /** Make the webinar on-demand. */
        on_demand?: boolean;
        /** Send invitation email to panelists. If `false`, do not send invitation email to panelists. */
        panelists_invitation_email_notification?: boolean;
        /** Start video when panelists join webinar. */
        panelists_video?: boolean;
        /** Zoom will open a survey page in attendees' browsers after leaving the webinar. */
        post_webinar_survey?: boolean;
        /** Enable practice session. */
        practice_session?: boolean;
        /** [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar. */
        question_and_answer?: {
            /** * `true` - Allow participants to submit questions.

* `false` - Do not allow submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists.

* `false` - Do not allow anonymous questions. */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want attendees to be able to view answered questions only or view all questions.

* `only` - Attendees are able to view answered questions only.

*  `all` - Attendees are able to view all questions submitted in the Q&amp;A. */
            answer_questions?: 'only' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can not answer questions or leave a comment in the question thread */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can click the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can not click the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
            /** If simulive webinar, 

* `true` - allow auto-reply to attendees. 

* `false` - don't allow auto-reply to the attendees. */
            allow_auto_reply?: boolean;
            /** If `allow_auto_reply` = true, the text to be included in the automatic response.  */
            auto_reply_text?: string;
            /** * `true` - Enable [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.

* `false` - Disable Q&amp;A for webinar. */
            enable?: boolean;
        };
        /** Send confirmation email to registrants */
        registrants_confirmation_email?: boolean;
        /** Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field. */
        registrants_email_notification?: boolean;
        /** Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number. */
        registrants_restrict_number?: number;
        /** Registration types. Only used for recurring webinars with a fixed time.  
 `1` - Attendees register once and can attend any of the webinar sessions.  
 `2` - Attendees need to register for each session in order to attend.  
 `3` - Attendees register once and can choose one or more sessions to attend. */
        registration_type?: 1 | 2 | 3;
        /** Always send 1080p video to attendees. */
        send_1080p_video_to_attendees?: boolean;
        /** Show social share buttons on the registration page. */
        show_share_button?: boolean;
        /** Whether to show the webinar's join information on the registration confirmation page. This setting is only applied to webinars with registration enabled. */
        show_join_info?: boolean;
        /** Survey URL for post webinar survey. */
        survey_url?: string;
        /** Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [webinar session branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers. */
        enable_session_branding?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. Not supported for simulive webinar. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and co-hosts to fully control the mute state of participants. Not supported for simulive webinar. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to include guest's email addresses in webinars' attendee reports. */
        email_in_attendee_report?: boolean;
    };
    /** Webinar start time in GMT/UTC. */
    start_time?: string;
    /** The `start_url` of a webinar is a URL using which a host or an alternative host can start the webinar. This URL should only be used by the host of the meeting and should not be shared with anyone other than the host of the webinar. 

The expiration time for the `start_url` field listed in the response of the [**Create a webinar**](/docs/api-reference/zoom-api/methods#operation/webinarCreate) API is two hours for all regular users. 
	
For users created using the `custCreate` option via the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API, the expiration time of the `start_url` field is 90 days.
	
For security reasons, to retrieve the latest value for the `start_url` field programmatically (after expiry), you must call the [**Get a webinar**](/docs/api-reference/zoom-api/methods#operation/webinar) API and refer to the value of the `start_url` field in the response.


  */
    start_url?: string;
    /** Time zone to format `start_time`. */
    timezone?: string;
    /** Webinar topic. */
    topic?: string;
    /** Tracking fields. */
    tracking_fields?: {
        /** Tracking fields type. */
        field?: string;
        /** Tracking fields value. */
        value?: string;
        /** Whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the webinar scheduling options in the Zoom Web Portal or not.

* `true` - Tracking field is visible.
* `false` - Tracking field is not visible to the users in the webinar options in the Zoom Web Portal but the field was used while scheduling this webinar via API. An invisible tracking field can be used by users while scheduling webinars via API only.  */
        visible?: boolean;
    }[];
    /** Webinar types. 
 `5` - Webinar.  
 `6` - Recurring webinar with no fixed time.  
 `9` - Recurring webinar with a fixed time. */
    type?: 5 | 6 | 9;
    /** Whether the webinar is `simulive`. */
    is_simulive?: boolean;
    /** The previously recorded file's ID for `simulive`. */
    record_file_id?: string;
    /** Whether to transition a simulive webinar to live. The host must be present at the time of transition. */
    transition_to_live?: boolean;
    /** {"enable":false,"time":0,"timeunit":"second"} */
    simulive_delay_start?: {
        /** Whether simulive needs to delay playback. */
        enable?: boolean;
        /** The time for delayed playback.
If the time unit is seconds, then the maximum value is 60 and the minimum value is 1.
If the time unit is minutes, then the maximum value is 10 and the minimum value is 1. */
        time?: number;
        /** The time unit for delayed playback.
`second` - The time unit for delayed playback is seconds.
`minute` - The time unit for delayed playback is minutes. */
        timeunit?: 'second' | 'minute';
    };
    /** The platform used when creating the meeting.
     * `other` - Created through another platform.
     * `open_api` - Created through Open API.
     * `web_portal` - Created through the web portal. */
    creation_source?: 'other' | 'open_api' | 'web_portal';
};

/** Update webinar status - Request body */
export type ZoomApi$Webinar$Status$Request = {
    action?: 'end';
};

/** Get a webinar survey - Response */
export type ZoomApi$Webinar$Survey$Get$Response = {
    /** Information about the customized webinar survey. */
    custom_survey?: {
        /** The survey's title, up to 64 characters. */
        title?: string;
        /** Allow participants to anonymously answer survey questions. 
* `true` - Anonymous survey enabled. 
* `false` - Participants cannot answer survey questions anonymously. 

 This value defaults to `true`. */
        anonymous?: boolean;
        /** Whether to display the number in the question name. 

 This value defaults to `true`. */
        numbered_questions?: boolean;
        /** Whether to display the question type in the question name. 

 This value defaults to `false`. */
        show_question_type?: boolean;
        /** The survey's feedback, up to 320 characters. 

 This value defaults to `Thank you so much for taking the time to complete the survey, your feedback really makes a difference.`. */
        feedback?: string;
        /** Information about the webinar survey's questions. */
        questions?: {
            /** The survey question, up to 420 characters. */
            name?: string;
            /** The survey's question and answer type.
             * `single` - Single choice.
             * `multiple` - Multiple choice.
             * `matching` - Matching.
             * `rank_order` - Rank order
             * `short_answer` - Short answer
             * `long_answer` - Long answer.
             * `fill_in_the_blank` - Fill in the blank
             * `rating_scale` - Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
            /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

 This value defaults to `false`. */
            answer_required?: boolean;
            /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

 This value defaults to `false`. */
            show_as_dropdown?: boolean;
            /** The survey question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` questions, you can only provide a maximum of 50 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
            answers?: string[];
            /** Information about the prompt questions. This field only applies to `matching` and `rank_order` questions. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
            }[];
            /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` questions. You must provide at least a **one** character minimum value. */
            answer_min_character?: number;
            /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` questions.
             * For `short_answer` question, a maximum of 500 characters.
             * For `long_answer` question, a maximum of 2,000 characters. */
            answer_max_character?: number;
            /** The rating scale's minimum value. This value cannot be less than zero. 

 This field only applies to the `rating_scale` survey. */
            rating_min_value?: number;
            /** The rating scale's maximum value, up to a maximum value of 10. 

 This field only applies to the `rating_scale` survey. */
            rating_max_value?: number;
            /** The low score label used for the `rating_min_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_min_label?: string;
            /** The high score label used for the `rating_max_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_max_label?: string;
        }[];
    };
    /** Whether the **Show in the browser when the webinar ends** option is enabled. 
* `true` - Enabled. 
* `false` - Disabled. 

 This value defaults to `true`. */
    show_in_the_browser?: boolean;
    /** Whether the **Show the link on the follow-up email** option is enabled. 
* `true` - Enabled. 
* `false` - Disabled. 

 This value defaults to `false`. */
    show_in_the_follow_up_email?: boolean;
    /** The link to the third party webinar survey. */
    third_party_survey?: string;
};

/** Update a webinar survey - Request body */
export type ZoomApi$Webinar$Survey$Update$Request = {
    /** Information about the customized webinar survey. */
    custom_survey?: {
        /** The survey's title, up to 64 characters. */
        title?: string;
        /** Allow participants to anonymously answer survey questions. 
* `true` - Anonymous survey enabled. 
* `false` - Participants cannot answer survey questions anonymously. 

 This value defaults to `true`. */
        anonymous?: boolean;
        /** Whether to display the number in the question name. 

 This value defaults to `true`. */
        numbered_questions?: boolean;
        /** Whether to display the question type in the question name. 

 This value defaults to `false`. */
        show_question_type?: boolean;
        /** The survey's feedback, up to 320 characters. 

 This value defaults to `Thank you so much for taking the time to complete the survey, your feedback really makes a difference.`. */
        feedback?: string;
        /** Information about the webinar survey's questions. */
        questions?: {
            /** The survey question, up to 420 characters. */
            name?: string;
            /** The survey's question and answer type.
             * `single` - Single choice.
             * `multiple` - Multiple choice.
             * `matching` - Matching.
             * `rank_order` - Rank order
             * `short_answer` - Short answer
             * `long_answer` - Long answer.
             * `fill_in_the_blank` - Fill in the blank
             * `rating_scale` - Rating scale. */
            type?:
                | 'single'
                | 'multiple'
                | 'matching'
                | 'rank_order'
                | 'short_answer'
                | 'long_answer'
                | 'fill_in_the_blank'
                | 'rating_scale';
            /** Whether participants must answer the question. 
* `true` - The participant must answer the question. 
* `false` - The participant does not need to answer the question. 

 This value defaults to `false`. */
            answer_required?: boolean;
            /** Whether to display the radio selection as a drop-down box. 
* `true` - Show as a drop-down box. 
* `false` - Do not show as a drop-down box. 

 This value defaults to `false`. */
            show_as_dropdown?: boolean;
            /** The survey question's available answers. This field requires a **minimum** of two answers. 

* For `single` and `multiple` questions, you can only provide a maximum of 50 answers. 
* For `matching` polls, you can only provide a maximum of 16 answers. 
* For `rank_order` polls, you can only provide a maximum of seven answers. */
            answers?: string[];
            /** Information about the prompt questions. This field only applies to `matching` and `rank_order` questions. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts. */
            prompts?: {
                /** The question prompt's title. */
                prompt_question?: string;
            }[];
            /** The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` questions. You must provide at least a **one** character minimum value. */
            answer_min_character?: number;
            /** The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` questions.
             * For `short_answer` question, a maximum of 500 characters.
             * For `long_answer` question, a maximum of 2,000 characters. */
            answer_max_character?: number;
            /** The rating scale's minimum value. This value can't be less than zero. 

 This field only applies to the `rating_scale` survey. */
            rating_min_value?: number;
            /** The rating scale's maximum value, up to a maximum value of 10. 

 This field only applies to the `rating_scale` survey. */
            rating_max_value?: number;
            /** The low score label used for the `rating_min_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_min_label?: string;
            /** The high score label used for the `rating_max_value` field, up to 50 characters. 

 This field only applies to the `rating_scale` survey. */
            rating_max_label?: string;
        }[];
    };
    /** Whether the **Show in the browser when the webinar ends** option is enabled. 
* `true` - Enabled. 
* `false` - Disabled. 

 This value defaults to `true`. */
    show_in_the_browser?: boolean;
    /** Whether the **Show the link on the follow-up email** option is enabled. 
* `true` - Enabled. 
* `false` - Disabled. 

 This value defaults to `false`. */
    show_in_the_follow_up_email?: boolean;
    /** The link to the third party webinar survey. */
    third_party_survey?: string;
};

/** Create a webinar template - Request body */
export type ZoomApi$Webinar$Template$Create$Request = {
    /** The webinar ID in long (int64) format. */
    webinar_id?: number;
    /** The webinar template's name. */
    name?: string;
    /** If the field is set to true, the recurrence webinar template will be saved as the scheduled webinar. */
    save_recurrence?: boolean;
    /** Overwrite an existing webinar template if the template is created from same existing webinar. */
    overwrite?: boolean;
};

/** Create a webinar template - Response */
export type ZoomApi$Webinar$Template$Create$Response = {
    /** The webinar template's ID. */
    id?: string;
    /** The webinar template's name. */
    name?: string;
};

/** Get webinar's token - Query parameters */
export type ZoomApi$Webinar$Token$Params = Partial<{
    /** The webinar token type: 
* `closed_caption_token` &mdash; The third-party closed caption API token. 

This defaults to `closed_caption_token`. */
    type: 'closed_caption_token';
}>;

/** Get webinar's token - Response */
export type ZoomApi$Webinar$Token$Response = {
    /** The generated webinar token. */
    token?: string;
};

/** Update a webinar - Query parameters */
export type ZoomApi$Webinar$Update$Params = Partial<{
    /** Webinar occurrence ID. Support change of agenda, start time, duration, and settings `host_video`, `panelist_video`, `hd_video, watermark`, `auto_recording`. */
    occurrence_id: string;
}>;

/** Update a webinar - Request body */
export type ZoomApi$Webinar$Update$Request = {
    /** Webinar description. */
    agenda?: string;
    /** Webinar duration, in minutes. Used for scheduled webinar only. */
    duration?: number;
    /** Webinar passcode. Passcode may only contain the characters [a-z A-Z 0-9 @ - _ * !]. Maximum of 10 characters.

If **Webinar Passcode** setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. 

 **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. 

 If the requirements are enabled, you can view those requirements by calling the [**Get account settings**](/docs/api/rest/reference/account/methods/#operation/accountSettings) API. */
    password?: string;
    /** The user's email address or `userId` to schedule a webinar for. */
    schedule_for?: string;
    /** Recurrence object. Use this object only for a meeting with type `8`, a recurring meeting with fixed time.  */
    recurrence?: {
        /** Select the final date when the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. Cannot be used with `end_times`. */
        end_date_time?: string;
        /** Select how many times the webinar will recur before it is canceled. The maximum number of recurring is 60. Cannot be used with `end_date_time`. */
        end_times?: number;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.

If you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. If you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`. */
        monthly_day?: number;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.**   
 `-1` - Last week of the month.  
 `1` - First week of the month.  
 `2` - Second week of the month.  
 `3` - Third week of the month.  
 `4` - Fourth week of the month. */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /** Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field. 

  
 `1` - Sunday.  
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` - Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /** Define the interval when the meeting should recur. If you would like to schedule a meeting that recurs every two months, set the value of this field as `2` and the value of the `type` parameter as `3`. 

For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.

 */
        repeat_interval?: number;
        /** Recurrence meeting types. 
 `1` - Daily.  
 `2` - Weekly.  
 `3` - Monthly. */
        type: 1 | 2 | 3;
        /** This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat.   
    
  The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `1` as the value of this field.  
   
  **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `1,3` as the value of this field.

   
 `1`  - Sunday.   
 `2` - Monday.  
 `3` - Tuesday.  
 `4` -  Wednesday.  
 `5` -  Thursday.  
 `6` - Friday.  
 `7` - Saturday. */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
    };
    /** Webinar settings. */
    settings?: {
        /** Add more webinar [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars). Provide this value as an array of [country codes](/docs/api/references/abbreviations/#countries) for the countries available as data center regions in the [**Account Profile**](https://zoom.us/account/setting) interface but have been opted out of in the [user settings](https://zoom.us/profile).

For example, the data center regions selected in your [**Account Profile**](https://zoom.us/account) are `Europe`, `Hong Kong SAR`, `Australia`, `India`, `Japan`, `China`, `United States`, and `Canada`. However, in the [**My Profile**](https://zoom.us/profile) settings, you did **not** select `India` and `Japan` for meeting and webinar traffic routing.

To include `India` and `Japan` as additional data centers, use the `[IN, TY]` value for this field. */
        additional_data_center_regions?: string[];
        /** Allow attendees to join from multiple devices. */
        allow_multiple_devices?: boolean;
        /** Alternative host emails or IDs. Separate multiple values by commas. */
        alternative_hosts?: string;
        /** Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher. */
        alternative_host_update_polls?: boolean;
        /** `0` - Automatically approve.  
 `1` - Manually approve.  
 `2` - No registration required. */
        approval_type?: 0 | 1 | 2;
        /** Send reminder email to attendees and panelists. */
        attendees_and_panelists_reminder_email_notification?: {
            /** * `true` - Send reminder email to attendees and panelists.

* `false` - Do not send reminder email to attendees and panelists. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 hour before webinar.  
 `2` - Send 1 day before webinar.  
 `3` - Send 1 hour and 1 day before webinar.  
 `4` - Send 1 week before webinar.  
 `5` - Send 1 hour and 1 week before webinar.  
 `6` - Send 1 day and 1 week before webinar.  
 `7` - Send 1 hour, 1 day and 1 week before webinar. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Determine how participants can join the audio portion of the webinar. */
        audio?: 'both' | 'telephony' | 'voip' | 'thirdParty';
        /** Third party audio conference info. */
        audio_conference_info?: string;
        /** If user has configured [**Sign Into Zoom with Specified Domains**](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated. */
        authentication_domains?: string;
        /** Webinar authentication option ID. */
        authentication_option?: string;
        /** Automatic recording. 
 `local` - Record on local.  
 `cloud` -  Record on cloud.  
 `none` - Disabled. */
        auto_recording?: 'local' | 'cloud' | 'none';
        /** Close registration after event date. */
        close_registration?: boolean;
        /** Contact email for registration */
        contact_email?: string;
        /** Contact name for registration */
        contact_name?: string;
        /** Set the email language to one of the following.
`en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`. */
        email_language?: string;
        /** Only signed in users can join this meeting.

**This field is deprecated and will not be supported in the future.** 

 As an alternative, use the ``meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar. */
        enforce_login?: boolean;
        /** Only signed in users with specified domains can join meetings.

**This field is deprecated and will not be supported in the future.**

 As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar. */
        enforce_login_domains?: string;
        /** Send follow-up email to absentees. */
        follow_up_absentees_email_notification?: {
            /** * `true` - Send follow-up email to absentees.

* `false` - Do not send follow-up email to absentees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 days after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** Send follow-up email to attendees. */
        follow_up_attendees_email_notification?: {
            /** * `true` - Send follow-up email to attendees.

* `false` - Do not send follow-up email to attendees. */
            enable?: boolean;
            /** `0` - No plan.  
 `1` - Send 1 day after the scheduled end date.  
 `2` - Send 2 days after the scheduled end date.  
 `3` - Send 3 days after the scheduled end date.  
 `4` - Send 4 days after the scheduled end date.  
 `5` - Send 5 days after the scheduled end date.  
 `6` - Send 6 days after the scheduled end date.  
 `7` - Send 7 days after the scheduled end date. */
            type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /** List of global dial-in countries */
        global_dial_in_countries?: string[];
        /** Default to HD video. */
        hd_video?: boolean;
        /** Whether HD video for attendees is enabled. */
        hd_video_for_attendees?: boolean;
        /** Start video when host joins the webinar. */
        host_video?: boolean;
        /** The webinar's [language interpretation settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. This is not supported for simulive webinars. */
        language_interpretation?: {
            /** Whether to enable [language interpretation](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064768) for the webinar. */
            enable?: boolean;
            /** Information about the webinar's language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two country IDs.

Only system-supported languages are allowed: `US` (English), `CN` (Chinese), `JP` (Japanese), `DE` (German), `FR` (French), `RU` (Russian), `PT` (Portuguese), `ES` (Spanish), and `KR` (Korean).

For example, to set an interpreter translating from English to Chinese, use `US,CN`. */
                languages?: string;
                /** A comma-separated list of the interpreter's languages. The string must contain exactly two languages.

To get this value, use the `language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/docs/api/users/#tag/users/GET/users/{userId}/settings) API response.

**languages**: System-supported languages include `English`, `Chinese`, `Japanese`, `German`, `French`, `Russian`, `Portuguese`, `Spanish`, and `Korean`.

**custom_languages**: User-defined languages added by the user.

For example, an interpreter translating between English and French should use `English,French`. */
                interpreter_languages?: string;
            }[];
        };
        /** The webinar's [sign language interpretation settings](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar). Make sure to add the language in the web portal in order to use it in the API. See link for details. 

**Note:** If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. */
        sign_language_interpretation?: {
            /** Whether to enable [sign language interpretation](https://support.zoom.us/hc/en-us/articles/9644962487309-Using-sign-language-interpretation-in-a-meeting-or-webinar) for the webinar. */
            enable?: boolean;
            /** Information about the webinar's sign language interpreters. */
            interpreters?: {
                /** The interpreter's email address. */
                email?: string;
                /** The interpreter's sign language. 

 To get this value, use the `sign_language_interpretation` object's `languages` and `custom_languages` values in the [**Get user settings**](/api-reference/zoom-api/methods#operation/userSettings) API response. */
                sign_language?: string;
            }[];
        };
        /** Require panelists to authenticate to join. */
        panelist_authentication?: boolean;
        /** Only authenticated users can join the webinar. */
        meeting_authentication?: boolean;
        /** Add watermark that identifies the viewing participant. */
        add_watermark?: boolean;
        /** Add audio watermark that identifies the participants. */
        add_audio_watermark?: boolean;
        /** Send notification email to registrants when the host updates a webinar. */
        notify_registrants?: boolean;
        /** Make the webinar on-demand. */
        on_demand?: boolean;
        /** Send invitation email to panelists. If `false`, do not send invitation email to panelists. */
        panelists_invitation_email_notification?: boolean;
        /** Start video when panelists join the webinar. */
        panelists_video?: boolean;
        /** Zoom will open a survey page in attendees' browsers after leaving the webinar. */
        post_webinar_survey?: boolean;
        /** Enable practice session. */
        practice_session?: boolean;
        /** [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar. */
        question_and_answer?: {
            /** * `true` - Allow participants to submit questions.

* `false` - Do not allow submit questions. */
            allow_submit_questions?: boolean;
            /** * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists..

* `false` - Do not allow anonymous questions. */
            allow_anonymous_questions?: boolean;
            /** Indicate whether you want attendees to be able to view answered questions only or view all questions.

* `only` - Attendees are able to view answered questions only.

*  `all` - Attendees are able to view all questions submitted in the Q&amp;A. */
            answer_questions?: 'only' | 'all';
            /** * `true` - Attendees can answer questions or leave a comment in the question thread.

* `false` - Attendees can't answer questions or leave a comment in the question thread. */
            attendees_can_comment?: boolean;
            /** * `true` - Attendees can click the thumbs up button to bring popular questions to the top of the Q&amp;A window.

* `false` - Attendees can't click the thumbs up button on questions. */
            attendees_can_upvote?: boolean;
            /** If simulive webinar, 

* `true` - allow auto-reply to attendees. 

* `false` - don't allow auto-reply to the attendees. */
            allow_auto_reply?: boolean;
            /** If `allow_auto_reply` = true, the text to be included in the automatic response.  */
            auto_reply_text?: string;
            /** * `true` - Enable [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.

* `false` - Disable Q&amp;A for webinar. */
            enable?: boolean;
        };
        /** Send confirmation email to registrants */
        registrants_confirmation_email?: boolean;
        /** Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field. */
        registrants_email_notification?: boolean;
        /** Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number. */
        registrants_restrict_number?: number;
        /** Registration types. Only used for recurring webinars with a fixed time.  
 `1` - Attendees register once and can attend any of the webinar sessions.  
 `2` - Attendees need to register for each session in order to attend.  
 `3` - Attendees register once and can choose one or more sessions to attend. */
        registration_type?: 1 | 2 | 3;
        /** Always send 1080p video to attendees. */
        send_1080p_video_to_attendees?: boolean;
        /** Show social share buttons on the registration page. */
        show_share_button?: boolean;
        /** Whether to show the webinar's join information on the registration confirmation page. This setting is only applied to webinars with registration enabled. */
        show_join_info?: boolean;
        /** Survey url for post webinar survey */
        survey_url?: string;
        /** Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [Webinar Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the virtual background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers. */
        enable_session_branding?: boolean;
        /** Whether to enable the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting) setting. Not supported for simulive webinar. This option cannot be used together with `allow_host_control_participant_mute_state`, only one of the two can be enabled at a time. */
        request_permission_to_unmute_participants?: boolean;
        /** Whether to allow the host and co-hosts to fully control the mute state of participants. Not supported for simulive webinar. This option cannot be used together with `request_permission_to_unmute_participants`, only one of the two can be enabled at a time. */
        allow_host_control_participant_mute_state?: boolean;
        /** Whether to include guest's email addresses in webinars' attendee reports. */
        email_in_attendee_report?: boolean;
    };
    /** Webinar start time, in the format `yyyy-MM-dd'T'HH:mm:ss'Z'`. Should be in GMT time. In the format `yyyy-MM-dd'T'HH:mm:ss`. This should be in local time and the timezone should be specified. Only used for scheduled webinars and recurring webinars with a fixed time. */
    start_time?: string;
    /** The timezone to assign to the `start_time` value. This field is only used for scheduled or recurring webinars with a fixed time.

For a list of supported timezones and their formats, see our [timezone list](/docs/api/references/abbreviations/#timezones). */
    timezone?: string;
    /** The webinar topic. */
    topic?: string;
    /** Tracking fields. */
    tracking_fields?: {
        /** Tracking fields type. */
        field?: string;
        /** Tracking fields value. */
        value?: string;
    }[];
    /** Webinar types. 
 `5` - webinar.  
 `6` - Recurring webinar with no fixed time.  
 `9` - Recurring webinar with a fixed time. */
    type?: 5 | 6 | 9;
    /** Whether to set the webinar to simulive. */
    is_simulive?: boolean;
    /** The previously recorded file's ID for `simulive`. */
    record_file_id?: string;
    /** Whether to transition a simulive webinar to live. The host must be present at the time of transition. */
    transition_to_live?: boolean;
    /** {"enable":false,"time":0,"timeunit":"second"} */
    simulive_delay_start?: {
        /** Whether simulive need delay playback. */
        enable?: boolean;
        /** The time for delayed playback.
If the time unit is seconds, then the maximum value is 60 and the minimum value is 1.
If the time unit is minutes, then the maximum value is 10 and the minimum value is 1. */
        time?: number;
        /** The time unit for delayed playback.
`second` - The time unit for delayed playback is seconds.
`minute` - The time unit for delayed playback is minutes. */
        timeunit?: 'second' | 'minute';
    };
};

/** List webinars - Query parameters */
export type ZoomApi$Webinars$Params = Partial<{
    /** The type of webinar.
     * `scheduled` - All valid previous (unexpired) webinars, live webinars, and upcoming scheduled webinars.
     * `upcoming` - All upcoming webinars, including live webinars. */
    type: 'scheduled' | 'upcoming';
    /** The number of records returned within a single API call. */
    page_size: number;
    /** **Deprecated** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number: number;
}>;

/** List webinars - Response */
export type ZoomApi$Webinars$Response = {
    /** Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token's expiration period is 15 minutes. */
    next_page_token?: string;
    /** The number of pages returned for the request made. */
    page_count?: number;
    /** **Deprecated** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination. */
    page_number?: number;
    /** The number of records returned with a single API call. */
    page_size?: number;
    /** The total number of all the records available across pages. */
    total_records?: number;
} & {
    /** List of webinar objects. */
    webinars?: {
        /** Webinar description. The agenda length gets truncated to 250 characters when you list all webinars for a user. To view the complete agenda, retrieve details for a single webinar, use the [**Get a webinar**](/docs/api-reference/zoom-api/methods#operation/webinar) API. */
        agenda?: string;
        /** The webinar's creation time. */
        created_at?: string;
        /** The webinar's duration, in minutes. */
        duration?: number;
        /** The host's ID. */
        host_id?: string;
        /** The webinar ID. */
        id?: number;
        /** The URL to join the webinar. */
        join_url?: string;
        /** The webinar's start time. */
        start_time?: string;
        /** The webinar's [timezone](https://developers.zoom.us/docs/api/rest/other-references/abbreviation-lists/#timezones). */
        timezone?: string;
        /** The webinar's topic. */
        topic?: string;
        /** The webinar type.
         * `5` - A webinar.
         * `6` - A recurring webinar without a fixed time.
         * `9` - A recurring webinar with a fixed time. */
        type?: 5 | 6 | 9;
        /** The webinar's universally unique identifier (UUID). Each webinar instance generates a webinar UUID. */
        uuid?: string;
        /** Whether the webinar is `simulive`. */
        is_simulive?: boolean;
    }[];
};
