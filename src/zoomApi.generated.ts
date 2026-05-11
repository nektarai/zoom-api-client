/**
 * Auto-generated Zoom API client from OpenAPI spec.
 * Do not edit manually - run `npm run generate` to regenerate.
 */

import { ZoomTokens, ZoomError } from './types';
import { ZoomClient } from './zoomClient';
import * as GeneratedTypes from './types.generated';

export class ZoomApi {
    private client: ZoomClient;
    tokens: Partial<ZoomTokens>;

    constructor(options: { client: ZoomClient; tokens: Partial<ZoomTokens> }) {
        this.client = options.client;
        this.tokens = options.tokens || {};
    }

    setTokens(tokens: Partial<ZoomTokens>) {
        this.tokens = tokens;
    }

    private getAuthHeader() {
        if (this.tokens?.access_token) {
            return {
                Authorization: `Bearer ${this.tokens.access_token}`,
            };
        }
        throw new ZoomError('access_token not found');
    }

    /** archiveFiles API methods */
    archiveFiles() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** List archived files */
            list(
                params?: GeneratedTypes.ZoomApi$List$Archived$Files$Params,
            ): Promise<GeneratedTypes.ZoomApi$List$Archived$Files$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/archive_files`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get archived file statistics */
            listStatistics(
                params?: GeneratedTypes.ZoomApi$Get$Archived$File$Statistics$Params,
            ): Promise<GeneratedTypes.ZoomApi$Get$Archived$File$Statistics$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/archive_files/statistics`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
        };
    }

    /** devices API methods */
    devices() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** List devices */
            list(
                params?: GeneratedTypes.ZoomApi$List$Devices$Params,
            ): Promise<GeneratedTypes.ZoomApi$List$Devices$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Add a new device */
            create(
                body?: GeneratedTypes.ZoomApi$Add$Device$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get ZDM group info */
            listGroups(
                params?: GeneratedTypes.ZoomApi$Getzdmgroupinfo$Params,
            ): Promise<GeneratedTypes.ZoomApi$Getzdmgroupinfo$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/groups`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Assign a device to a user or commonarea */
            createAssignment(
                body?: GeneratedTypes.ZoomApi$Assigndevicetoauser$Commonarea$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/zpa/assignment`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get Zoom Phone Appliance settings by user ID */
            listSettings(
                params?: GeneratedTypes.ZoomApi$Get$Zpa$Device$List$Profile$Setting$Ofa$User$Params,
            ): Promise<GeneratedTypes.ZoomApi$Get$Zpa$Device$List$Profile$Setting$Ofa$User$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/zpa/settings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Upgrade ZPA firmware or app */
            createUpgrade(
                body?: GeneratedTypes.ZoomApi$Upgrade$Zpas$App$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/zpa/upgrade`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete ZPA device by vendor and mac address */
            deleteMacAddress(vendor: string, macAddress: string): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/zpa/vendors/${vendor}/mac_addresses/${macAddress}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get ZPA version info */
            listVersions(
                zdmGroupId: string,
            ): Promise<GeneratedTypes.ZoomApi$Get$Zpa$Versioninfo$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/zpa/zdm_groups/${zdmGroupId}/versions`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** h323 API methods */
    h323() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** List H.323/SIP devices */
            listDevices(
                params?: GeneratedTypes.ZoomApi$Device$List$Params,
            ): Promise<GeneratedTypes.ZoomApi$Device$List$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/h323/devices`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Create a H.323/SIP device */
            createDevice(
                body?: GeneratedTypes.ZoomApi$Device$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Device$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/h323/devices`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update a H.323/SIP device */
            updateDevice(
                deviceId: string,
                body?: GeneratedTypes.ZoomApi$Device$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/h323/devices/${deviceId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a H.323/SIP device */
            deleteDevice(deviceId: string): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/h323/devices/${deviceId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** report API methods */
    report() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get sign In / sign out activity report */
            listActivities(
                params?: GeneratedTypes.ZoomApi$Report$Sign$In$Sign$Out$Activities$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Sign$In$Sign$Out$Activities$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/activities`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get billing reports */
            getBilling(): Promise<GeneratedTypes.ZoomApi$Get$Billing$Report$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/billing`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get billing invoice reports */
            listInvoices(
                params?: GeneratedTypes.ZoomApi$Get$Billing$Invoices$Reports$Params,
            ): Promise<GeneratedTypes.ZoomApi$Get$Billing$Invoices$Reports$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/billing/invoices`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get cloud recording usage report */
            getCloudRecording(
                params?: GeneratedTypes.ZoomApi$Report$Cloud$Recording$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Cloud$Recording$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/cloud_recording`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get daily usage report */
            getDaily(
                params?: GeneratedTypes.ZoomApi$Report$Daily$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Daily$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/daily`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get history meeting and webinar list */
            listHistoryMeetings(
                params?: GeneratedTypes.ZoomApi$Gethistorymeetingandwebinarlist$Params,
            ): Promise<GeneratedTypes.ZoomApi$Gethistorymeetingandwebinarlist$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/history_meetings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get a meeting activities report */
            listMeetingActivities(
                params?: GeneratedTypes.ZoomApi$Report$Meetingactivitylogs$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Meetingactivitylogs$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/meeting_activities`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get meeting detail reports */
            getMeeting(
                meetingId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Meeting$Details$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/meetings/${meetingId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get meeting participant reports */
            listParticipants(
                meetingId: string,
                params?: GeneratedTypes.ZoomApi$Report$Meeting$Participants$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Meeting$Participants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/meetings/${meetingId}/participants`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get meeting poll reports */
            listPolls(
                meetingId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Meeting$Polls$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/meetings/${meetingId}/polls`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get meeting Q&A report */
            getQa(
                meetingId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Meeting$Q$A$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/meetings/${meetingId}/qa`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get meeting survey report */
            getSurvey(
                meetingId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Meeting$Survey$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/meetings/${meetingId}/survey`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get operation logs report */
            listOperationlogs(
                params?: GeneratedTypes.ZoomApi$Report$Operation$Logs$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Operation$Logs$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/operationlogs`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get remote support report */
            getRemoteSupport(
                params?: GeneratedTypes.ZoomApi$Getremotesupportreport$Params,
            ): Promise<GeneratedTypes.ZoomApi$Getremotesupportreport$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/remote_support`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get telephone reports */
            getTelephone(
                params?: GeneratedTypes.ZoomApi$Report$Telephone$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Telephone$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/telephone`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get upcoming events report */
            listUpcomingEvents(
                params?: GeneratedTypes.ZoomApi$Report$Upcoming$Events$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Upcoming$Events$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/upcoming_events`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get active or inactive host reports */
            listUsers(
                params?: GeneratedTypes.ZoomApi$Report$Users$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Users$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/users`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get meeting reports */
            listMeetings(
                userId: string,
                params?: GeneratedTypes.ZoomApi$Report$Meetings$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Meetings$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/users/${userId}/meetings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get webinar detail reports */
            getWebinar(
                webinarId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Webinar$Details$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/webinars/${webinarId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get webinar participant reports */
            reportWebinarParticipants(
                webinarId: string,
                params?: GeneratedTypes.ZoomApi$Report$Webinar$Participants$Params,
            ): Promise<GeneratedTypes.ZoomApi$Report$Webinar$Participants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/webinars/${webinarId}/participants`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get webinar poll reports */
            reportWebinarPolls(
                webinarId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Webinar$Polls$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/webinars/${webinarId}/polls`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get webinar Q&A report */
            reportWebinarQA(
                webinarId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Webinar$Q$A$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/webinars/${webinarId}/qa`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get webinar survey report */
            reportWebinarSurvey(
                webinarId: string,
            ): Promise<GeneratedTypes.ZoomApi$Report$Webinar$Survey$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/report/webinars/${webinarId}/survey`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** sipPhones API methods */
    sipPhones() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** List SIP phones */
            listPhones(
                params?: GeneratedTypes.ZoomApi$List$S$I$P$Phone$Phones$Params,
            ): Promise<GeneratedTypes.ZoomApi$List$S$I$P$Phone$Phones$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/sip_phones/phones`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Enable SIP phone */
            createPhone(
                body?: GeneratedTypes.ZoomApi$Enable$S$I$P$Phone$Phones$Request,
            ): Promise<GeneratedTypes.ZoomApi$Enable$S$I$P$Phone$Phones$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/sip_phones/phones`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update SIP phone */
            updatePhone(
                phoneId: string,
                body?: GeneratedTypes.ZoomApi$Update$S$I$P$Phone$Phones$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/sip_phones/phones/${phoneId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete SIP phone */
            deletePhone(phoneId: string): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/sip_phones/phones/${phoneId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** meetings API methods */
    meetings() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** List an account's meeting or webinar summaries */
            listMeetingSummaries(
                params?: GeneratedTypes.ZoomApi$Listmeetingsummaries$Params,
            ): Promise<GeneratedTypes.ZoomApi$Listmeetingsummaries$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/meeting_summaries`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
        };
    }

    /** tsp API methods */
    tsp() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get account's TSP information */
            list(): Promise<GeneratedTypes.ZoomApi$Tsp$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/tsp`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update an account's TSP information */
            update(
                body?: GeneratedTypes.ZoomApi$Tsp$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/tsp`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
        };
    }

    /** trackingFields API methods */
    trackingFields() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** List tracking fields */
            list(): Promise<GeneratedTypes.ZoomApi$Trackingfield$List$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/tracking_fields`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Create a tracking field */
            create(
                body?: GeneratedTypes.ZoomApi$Trackingfield$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Trackingfield$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/tracking_fields`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
        };
    }

    /** archiveFiles API methods (parameterized) */
    archiveFile(fileId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Update an archived file's auto-delete status */
            updateArchiveFile(
                body?: GeneratedTypes.ZoomApi$Update$Archived$File$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/archive_files/${fileId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
        };
    }

    /** meetings API methods (parameterized) */
    meeting(meetingId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get a meeting's archive token for local archiving */
            getLocalArchiving(): Promise<GeneratedTypes.ZoomApi$Meeting$Local$Archiving$Archive$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/jointoken/local_archiving`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get meeting recordings */
            listRecordings(
                params?: GeneratedTypes.ZoomApi$Recording$Get$Params,
            ): Promise<GeneratedTypes.ZoomApi$Recording$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Delete meeting or webinar recordings */
            deleteRecording(
                params?: GeneratedTypes.ZoomApi$Recording$Delete$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get a meeting or webinar recording's analytics details */
            listAnalyticsDetails(
                params?: GeneratedTypes.ZoomApi$Analytics$Details$Params,
            ): Promise<GeneratedTypes.ZoomApi$Analytics$Details$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/analytics_details`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get a meeting or webinar recording's analytics summary */
            getAnalyticsSummary(
                params?: GeneratedTypes.ZoomApi$Analytics$Summary$Params,
            ): Promise<GeneratedTypes.ZoomApi$Analytics$Summary$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/analytics_summary`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** List recording registrants */
            listRegistrants(
                params?: GeneratedTypes.ZoomApi$Meeting$Recording$Registrants$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Recording$Registrants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/registrants`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Create a recording registrant */
            createRegistrant(
                body?: GeneratedTypes.ZoomApi$Meeting$Recording$Registrant$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Recording$Registrant$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/registrants`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get registration questions */
            listQuestions(): Promise<GeneratedTypes.ZoomApi$Recording$Registrants$Questions$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/registrants/questions`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update registration questions */
            updateQuestion(
                body?: GeneratedTypes.ZoomApi$Recording$Registrant$Question$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/registrants/questions`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update a registrant's status */
            updateStatus(
                body?: GeneratedTypes.ZoomApi$Meeting$Recording$Registrant$Status$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/registrants/status`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get meeting recording settings */
            listSettings(): Promise<GeneratedTypes.ZoomApi$Recording$Setting$Update$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/settings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update meeting recording settings */
            updateSetting(
                body?: GeneratedTypes.ZoomApi$Recording$Settings$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/settings`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a recording file for a meeting or webinar */
            recordingDeleteOne(
                recordingId: string,
                params?: GeneratedTypes.ZoomApi$Recording$Delete$One$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/${recordingId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Recover a single recording */
            recordingStatusUpdateOne(
                recordingId: string,
                body?: GeneratedTypes.ZoomApi$Recording$Status$Update$One$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/${recordingId}/status`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get a meeting transcript */
            getTranscript(): Promise<GeneratedTypes.ZoomApi$Get$Meeting$Transcript$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/transcript`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Delete a meeting or webinar transcript */
            deleteTranscript(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/transcript`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Recover meeting recordings */
            recordingStatusUpdate(
                body?: GeneratedTypes.ZoomApi$Recording$Status$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/recordings/status`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Add a meeting app */
            createOpenApp(): Promise<GeneratedTypes.ZoomApi$Meeting$App$Add$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/open_apps`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Delete a meeting app */
            deleteOpenApp(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/open_apps`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get a meeting's join token for local recording */
            getLocalRecording(
                params?: GeneratedTypes.ZoomApi$Meeting$Local$Recording$Join$Token$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Local$Recording$Join$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/jointoken/local_recording`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get meeting's token */
            getToken(
                params?: GeneratedTypes.ZoomApi$Meeting$Token$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/token`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Perform batch registration */
            createBatchRegistrants(
                body?: GeneratedTypes.ZoomApi$Add$Batch$Registrants$Request,
            ): Promise<GeneratedTypes.ZoomApi$Add$Batch$Registrants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/batch_registrants`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get meeting invitation */
            getInvitation(): Promise<GeneratedTypes.ZoomApi$Meeting$Invitation$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/invitation`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Create a meeting's invite links */
            createInviteLink(
                body?: GeneratedTypes.ZoomApi$Meeting$Invite$Links$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Invite$Links$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/invite_links`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** List meeting registrants */
            meetingRegistrants(
                params?: GeneratedTypes.ZoomApi$Meeting$Registrants$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Registrants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/registrants`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Add a meeting registrant */
            meetingRegistrantCreate(
                body?: GeneratedTypes.ZoomApi$Meeting$Registrant$Create$Request,
                params?: GeneratedTypes.ZoomApi$Meeting$Registrant$Create$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Registrant$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/registrants`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                    params: params,
                }) as any;
            },
            /** List registration questions  */
            meetingRegistrantsQuestionsGet(): Promise<GeneratedTypes.ZoomApi$Meeting$Registrants$Questions$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/registrants/questions`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update registration questions */
            meetingRegistrantQuestionUpdate(
                body?: GeneratedTypes.ZoomApi$Meeting$Registrant$Question$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/registrants/questions`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update registrant's status */
            meetingRegistrantStatus(
                body?: GeneratedTypes.ZoomApi$Meeting$Registrant$Status$Request,
                params?: GeneratedTypes.ZoomApi$Meeting$Registrant$Status$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/registrants/status`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                    params: params,
                }) as any;
            },
            /** Get a meeting registrant */
            getRegistrant(
                registrantId: string,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Registrant$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/registrants/${registrantId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Delete a meeting registrant */
            deleteRegistrant(
                registrantId: string,
                params?: GeneratedTypes.ZoomApi$Meetingregistrantdelete$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/registrants/${registrantId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get a meeting's join token for live streaming */
            getLiveStreaming(): Promise<GeneratedTypes.ZoomApi$Meeting$Live$Streaming$Join$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/jointoken/live_streaming`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get livestream details */
            getLivestream(): Promise<GeneratedTypes.ZoomApi$Get$Meeting$Live$Stream$Details$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/livestream`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a livestream */
            updateLivestream(
                body?: GeneratedTypes.ZoomApi$Meeting$Live$Stream$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/livestream`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update livestream status */
            meetingLiveStreamStatusUpdate(
                body?: GeneratedTypes.ZoomApi$Meeting$Live$Stream$Status$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/livestream/status`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get a meeting */
            getMeeting(
                params?: GeneratedTypes.ZoomApi$Meeting$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Update a meeting */
            updateMeeting(
                body?: GeneratedTypes.ZoomApi$Meeting$Update$Request,
                params?: GeneratedTypes.ZoomApi$Meeting$Update$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                    params: params,
                }) as any;
            },
            /** Delete a meeting */
            deleteMeeting(
                params?: GeneratedTypes.ZoomApi$Meeting$Delete$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get a meeting SIP URI with passcode */
            createSipDialing(
                body?: GeneratedTypes.ZoomApi$Get$Sip$Dialing$With$Passcode$Request,
            ): Promise<GeneratedTypes.ZoomApi$Get$Sip$Dialing$With$Passcode$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/sip_dialing`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update meeting status */
            meetingStatus(
                body?: GeneratedTypes.ZoomApi$Meeting$Status$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/status`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Perform batch poll creation */
            createBatchPolls(
                body?: GeneratedTypes.ZoomApi$Create$Batch$Polls$Request,
            ): Promise<GeneratedTypes.ZoomApi$Create$Batch$Polls$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/batch_polls`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** List meeting polls */
            listPolls(
                params?: GeneratedTypes.ZoomApi$Meeting$Polls$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Polls$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/polls`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Create a meeting poll */
            createPoll(
                body?: GeneratedTypes.ZoomApi$Meeting$Poll$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Poll$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/polls`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get a meeting poll */
            getPoll(
                pollId: string,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Poll$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/polls/${pollId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a meeting poll */
            updatePoll(
                pollId: string,
                body?: GeneratedTypes.ZoomApi$Meeting$Poll$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/polls/${pollId}`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a meeting poll */
            deletePoll(pollId: string): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/polls/${pollId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get a meeting or webinar summary */
            getMeetingSummary(): Promise<GeneratedTypes.ZoomApi$Getameetingsummary$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/meeting_summary`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Delete a meeting or webinar summary */
            deleteMeetingSummary(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/meeting_summary`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get a meeting survey */
            getSurvey(): Promise<GeneratedTypes.ZoomApi$Meeting$Survey$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/survey`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a meeting survey */
            updateSurvey(
                body?: GeneratedTypes.ZoomApi$Meeting$Survey$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/survey`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a meeting survey */
            deleteSurvey(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/meetings/${meetingId}/survey`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** pastMeetings API methods (parameterized) */
    pastMeeting(meetingUUID: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get a meeting's archived files */
            listArchiveFiles(): Promise<GeneratedTypes.ZoomApi$Get$Archived$Files$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_meetings/${meetingUUID}/archive_files`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Delete a meeting's archived files */
            deleteArchiveFile(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_meetings/${meetingUUID}/archive_files`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get past meeting details */
            getPastMeeting(): Promise<GeneratedTypes.ZoomApi$Past$Meeting$Details$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_meetings/${meetingUUID}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List past meeting instances */
            listInstances(): Promise<GeneratedTypes.ZoomApi$Past$Meetings$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_meetings/${meetingUUID}/instances`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get past meeting participants */
            listParticipants(
                params?: GeneratedTypes.ZoomApi$Past$Meeting$Participants$Params,
            ): Promise<GeneratedTypes.ZoomApi$Past$Meeting$Participants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_meetings/${meetingUUID}/participants`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** List past meetings' Q&A */
            getQa(): Promise<GeneratedTypes.ZoomApi$List$Past$Meeting$Q$A$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_meetings/${meetingUUID}/qa`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List past meeting's poll results */
            listPolls(): Promise<GeneratedTypes.ZoomApi$List$Past$Meeting$Polls$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_meetings/${meetingUUID}/polls`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** users API methods (parameterized) */
    user(userId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** List all recordings */
            listRecordings(
                params?: GeneratedTypes.ZoomApi$Recordings$List$Params,
            ): Promise<GeneratedTypes.ZoomApi$Recordings$List$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/recordings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** List meetings */
            listMeetings(
                params?: GeneratedTypes.ZoomApi$Meetings$Params,
            ): Promise<GeneratedTypes.ZoomApi$Meetings$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/meetings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Create a meeting */
            createMeeting(
                body?: GeneratedTypes.ZoomApi$Meeting$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/meetings`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** List upcoming meetings */
            listUpcomingMeetings(): Promise<GeneratedTypes.ZoomApi$List$Upcoming$Meeting$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/upcoming_meetings`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List a user's PAC accounts */
            getPac(): Promise<GeneratedTypes.ZoomApi$User$P$A$Cs$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/pac`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List user's TSP accounts */
            getTsp(): Promise<GeneratedTypes.ZoomApi$User$T$S$Ps$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/tsp`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Add a user's TSP account */
            createTsp(
                body?: GeneratedTypes.ZoomApi$User$T$S$P$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$User$T$S$P$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/tsp`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Set global dial-in URL for a TSP user */
            updateSetting(
                body?: GeneratedTypes.ZoomApi$Tsp$Url$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/tsp/settings`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get a user's TSP account */
            userTSP(
                tspId: string,
            ): Promise<GeneratedTypes.ZoomApi$User$T$S$P$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/tsp/${tspId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a TSP account */
            updateTsp(
                tspId: string,
                body?: GeneratedTypes.ZoomApi$User$T$S$P$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/tsp/${tspId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a user's TSP account */
            deleteTsp(tspId: string): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/tsp/${tspId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List meeting templates */
            listMeetingTemplates(): Promise<GeneratedTypes.ZoomApi$List$Meeting$Templates$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/meeting_templates`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Create a meeting template from an existing meeting */
            createMeetingTemplate(
                body?: GeneratedTypes.ZoomApi$Meeting$Template$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Meeting$Template$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/meeting_templates`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** List webinar templates */
            listWebinarTemplates(): Promise<GeneratedTypes.ZoomApi$List$Webinar$Templates$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/webinar_templates`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Create a webinar template */
            createWebinarTemplate(
                body?: GeneratedTypes.ZoomApi$Webinar$Template$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Template$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/webinar_templates`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** List webinars */
            listWebinars(
                params?: GeneratedTypes.ZoomApi$Webinars$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinars$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/webinars`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Create a webinar */
            createWebinar(
                body?: GeneratedTypes.ZoomApi$Webinar$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/users/${userId}/webinars`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
        };
    }

    /** devices API methods (parameterized) */
    device(deviceId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get device detail */
            getDevice(): Promise<GeneratedTypes.ZoomApi$Get$Device$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/${deviceId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Change device  */
            updateDevice(
                body?: GeneratedTypes.ZoomApi$Update$Device$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/${deviceId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete device */
            deleteDevice(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/${deviceId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Assign a device to a group */
            updateAssignGroup(
                params?: GeneratedTypes.ZoomApi$Assgin$Group$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/${deviceId}/assign_group`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Change device association */
            updateAssignment(
                body?: GeneratedTypes.ZoomApi$Change$Device$Association$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/devices/${deviceId}/assignment`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
        };
    }

    /** liveMeetings API methods (parameterized) */
    liveMeeting(meetingId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Update a live meeting message */
            updateMessage(
                messageId: string,
                body?: GeneratedTypes.ZoomApi$Update$Meeting$Chat$Message$By$Id$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/live_meetings/${meetingId}/chat/messages/${messageId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a live meeting message */
            deleteMessage(
                messageId: string,
                params?: GeneratedTypes.ZoomApi$Delete$Meeting$Chat$Message$By$Id$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/live_meetings/${meetingId}/chat/messages/${messageId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Use in-meeting controls */
            updateEvent(
                body?: GeneratedTypes.ZoomApi$In$Meeting$Control$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/live_meetings/${meetingId}/events`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update participant Real-Time Media Streams (RTMS) app status */
            updateStatus(
                body?: GeneratedTypes.ZoomApi$Meeting$R$T$M$S$Status$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/live_meetings/${meetingId}/rtms_app/status`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
        };
    }

    /** trackingFields API methods (parameterized) */
    trackingField(fieldId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get a tracking field */
            getTrackingField(): Promise<GeneratedTypes.ZoomApi$Trackingfield$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/tracking_fields/${fieldId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a tracking field */
            updateTrackingField(
                body?: GeneratedTypes.ZoomApi$Trackingfield$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/tracking_fields/${fieldId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a tracking field */
            deleteTrackingField(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/tracking_fields/${fieldId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** liveWebinars API methods (parameterized) */
    liveWebinar(webinarId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Delete a live webinar message */
            deleteMessage(
                messageId: string,
                params?: GeneratedTypes.ZoomApi$Delete$Webinar$Chat$Message$By$Id$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/live_webinars/${webinarId}/chat/messages/${messageId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
        };
    }

    /** pastWebinars API methods (parameterized) */
    pastWebinar(webinarId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get webinar absentees */
            listAbsentees(
                params?: GeneratedTypes.ZoomApi$Webinar$Absentees$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Absentees$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_webinars/${webinarId}/absentees`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** List past webinar instances */
            listInstances(): Promise<GeneratedTypes.ZoomApi$Past$Webinars$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_webinars/${webinarId}/instances`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List webinar participants */
            listParticipants(
                params?: GeneratedTypes.ZoomApi$List$Webinar$Participants$Params,
            ): Promise<GeneratedTypes.ZoomApi$List$Webinar$Participants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_webinars/${webinarId}/participants`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** List past webinar poll results */
            listPolls(): Promise<GeneratedTypes.ZoomApi$List$Past$Webinar$Poll$Results$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_webinars/${webinarId}/polls`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List Q&As of a past webinar */
            getQa(): Promise<GeneratedTypes.ZoomApi$List$Past$Webinar$Q$A$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/past_webinars/${webinarId}/qa`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** webinars API methods (parameterized) */
    webinar(webinarId: string) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        return {
            /** Get a webinar */
            getWebinar(
                params?: GeneratedTypes.ZoomApi$Webinar$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Update a webinar */
            updateWebinar(
                body?: GeneratedTypes.ZoomApi$Webinar$Update$Request,
                params?: GeneratedTypes.ZoomApi$Webinar$Update$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                    params: params,
                }) as any;
            },
            /** Delete a webinar */
            deleteWebinar(
                params?: GeneratedTypes.ZoomApi$Webinar$Delete$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Perform batch registration */
            createBatchRegistrants(
                body?: GeneratedTypes.ZoomApi$Add$Batch$Webinar$Registrants$Request,
            ): Promise<GeneratedTypes.ZoomApi$Add$Batch$Webinar$Registrants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/batch_registrants`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get webinar's session branding */
            getBranding(): Promise<GeneratedTypes.ZoomApi$Get$Webinar$Branding$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Create a webinar's branding name tag */
            createNameTag(
                body?: GeneratedTypes.ZoomApi$Create$Webinar$Branding$Name$Tag$Request,
            ): Promise<GeneratedTypes.ZoomApi$Create$Webinar$Branding$Name$Tag$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/name_tags`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a webinar's branding name tag */
            deleteNameTag(
                params?: GeneratedTypes.ZoomApi$Delete$Webinar$Branding$Name$Tag$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/name_tags`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Update a webinar's branding name tag */
            updateNameTag(
                nameTagId: string,
                body?: GeneratedTypes.ZoomApi$Update$Webinar$Branding$Name$Tag$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/name_tags/${nameTagId}`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Upload a webinar's branding virtual background */
            createVirtualBackground(): Promise<GeneratedTypes.ZoomApi$Upload$Webinar$Branding$V$B$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/virtual_backgrounds`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Set webinar's default branding virtual background */
            updateVirtualBackground(
                params?: GeneratedTypes.ZoomApi$Set$Webinar$Branding$V$B$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/virtual_backgrounds`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Delete a webinar's branding virtual backgrounds */
            deleteVirtualBackground(
                params?: GeneratedTypes.ZoomApi$Delete$Webinar$Branding$V$B$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/virtual_backgrounds`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Upload a webinar's branding wallpaper */
            createWallpaper(): Promise<GeneratedTypes.ZoomApi$Upload$Webinar$Branding$Wallpaper$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/wallpaper`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Delete a webinar's branding wallpaper */
            deleteWallpaper(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/branding/wallpaper`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Create webinar's invite links */
            createInviteLink(
                body?: GeneratedTypes.ZoomApi$Webinar$Invite$Links$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Invite$Links$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/invite_links`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get a webinar's join token for live streaming */
            getLiveStreaming(): Promise<GeneratedTypes.ZoomApi$Webinar$Live$Streaming$Join$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/jointoken/live_streaming`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get a webinar's archive token for local archiving */
            getLocalArchiving(): Promise<GeneratedTypes.ZoomApi$Webinar$Local$Archiving$Archive$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/jointoken/local_archiving`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get a webinar's join token for local recording */
            getLocalRecording(): Promise<GeneratedTypes.ZoomApi$Webinar$Local$Recording$Join$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/jointoken/local_recording`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get live stream details */
            getLivestream(): Promise<GeneratedTypes.ZoomApi$Get$Webinar$Live$Stream$Details$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/livestream`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a live stream */
            updateLivestream(
                body?: GeneratedTypes.ZoomApi$Webinar$Live$Stream$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/livestream`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update live stream status */
            updateStatus(
                body?: GeneratedTypes.ZoomApi$Webinar$Live$Stream$Status$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/livestream/status`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** List panelists */
            listPanelists(): Promise<GeneratedTypes.ZoomApi$Webinar$Panelists$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/panelists`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Add panelists */
            createPanelist(
                body?: GeneratedTypes.ZoomApi$Webinar$Panelist$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Panelist$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/panelists`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Remove all panelists */
            deletePanelist(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/panelists`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Remove a panelist */
            webinarPanelistDelete(panelistId: string): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/panelists/${panelistId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List a webinar's polls  */
            listPolls(
                params?: GeneratedTypes.ZoomApi$Webinar$Polls$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Polls$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/polls`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Create a webinar's poll */
            createPoll(
                body?: GeneratedTypes.ZoomApi$Webinar$Poll$Create$Request,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Poll$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/polls`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get a webinar poll */
            getPoll(
                pollId: string,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Poll$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/polls/${pollId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a webinar poll */
            updatePoll(
                pollId: string,
                body?: GeneratedTypes.ZoomApi$Webinar$Poll$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/polls/${pollId}`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a webinar poll */
            deletePoll(pollId: string): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/polls/${pollId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** List webinar registrants */
            listRegistrants(
                params?: GeneratedTypes.ZoomApi$Webinar$Registrants$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Registrants$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/registrants`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Add a webinar registrant */
            createRegistrant(
                body?: GeneratedTypes.ZoomApi$Webinar$Registrant$Create$Request,
                params?: GeneratedTypes.ZoomApi$Webinar$Registrant$Create$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Registrant$Create$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/registrants`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                    params: params,
                }) as any;
            },
            /** List registration questions */
            listQuestions(): Promise<GeneratedTypes.ZoomApi$Webinar$Registrants$Questions$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/registrants/questions`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update registration questions */
            updateQuestion(
                body?: GeneratedTypes.ZoomApi$Webinar$Registrant$Question$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/registrants/questions`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update registrant's status */
            webinarRegistrantStatus(
                body?: GeneratedTypes.ZoomApi$Webinar$Registrant$Status$Request,
                params?: GeneratedTypes.ZoomApi$Webinar$Registrant$Status$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/registrants/status`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                    params: params,
                }) as any;
            },
            /** Get a webinar registrant */
            getRegistrant(
                registrantId: string,
                params?: GeneratedTypes.ZoomApi$Webinar$Registrant$Get$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Registrant$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/registrants/${registrantId}`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Delete a webinar registrant */
            deleteRegistrant(
                registrantId: string,
                params?: GeneratedTypes.ZoomApi$Delete$Webinar$Registrant$Params,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/registrants/${registrantId}`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get a webinar SIP URI with passcode */
            createSipDialing(
                body?: GeneratedTypes.ZoomApi$Get$Webinar$Sip$Dialing$With$Passcode$Request,
            ): Promise<GeneratedTypes.ZoomApi$Get$Webinar$Sip$Dialing$With$Passcode$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/sip_dialing`,
                    method: 'POST',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Update webinar status */
            webinarStatus(
                body?: GeneratedTypes.ZoomApi$Webinar$Status$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/status`,
                    method: 'PUT',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Get a webinar survey */
            getSurvey(): Promise<GeneratedTypes.ZoomApi$Webinar$Survey$Get$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/survey`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Update a webinar survey */
            updateSurvey(
                body?: GeneratedTypes.ZoomApi$Webinar$Survey$Update$Request,
            ): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/survey`,
                    method: 'PATCH',
                    headers: {
                        ...self.getAuthHeader(),
                        'Content-Type': 'application/json',
                    },
                    body: body ? JSON.stringify(body) : undefined,
                }) as any;
            },
            /** Delete a webinar survey */
            deleteSurvey(): Promise<any> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/survey`,
                    method: 'DELETE',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
            /** Get webinar's token */
            getToken(
                params?: GeneratedTypes.ZoomApi$Webinar$Token$Params,
            ): Promise<GeneratedTypes.ZoomApi$Webinar$Token$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/token`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                    params: params,
                }) as any;
            },
            /** Get webinar tracking sources */
            listTrackingSources(): Promise<GeneratedTypes.ZoomApi$Get$Tracking$Sources$Response> {
                return self.client.request({
                    url: `${self.client.BASE_API_URL}/webinars/${webinarId}/tracking_sources`,
                    method: 'GET',
                    headers: {
                        ...self.getAuthHeader(),
                    },
                }) as any;
            },
        };
    }

    /** Retrieve a ZAK (Zoom Access Key) token for a user. See: https://developers.zoom.us/docs/api/meetings/#tag/users */
    getZAKToken(userId: string): Promise<{ token: string }> {
        return this.client.request({
            url: `${this.client.BASE_API_URL}/users/${userId}/token`,
            method: 'GET',
            headers: this.getAuthHeader(),
            params: { type: 'zak' },
        }) as any;
    }

    /** Download raw transcript content from a recording URL (e.g. a VTT file URL from listRecordings). Uses a 60s timeout. Only sends auth headers to Zoom-owned domains. */
    downloadTranscript(url: string): Promise<string> {
        const parsed = new URL(url);
        if (
            parsed.hostname !== 'zoom.us' &&
            !parsed.hostname.endsWith('.zoom.us')
        ) {
            throw new ZoomError(
                'downloadTranscript only supports zoom.us URLs to prevent leaking auth tokens',
            );
        }
        return this.client.request(
            {
                url,
                method: 'GET',
                headers: this.getAuthHeader(),
            },
            { requestTimeoutMs: 60000 },
        ) as any;
    }
}
