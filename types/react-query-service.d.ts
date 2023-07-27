import { UseQueryOptions, UseMutationResult, QueryObserverResult } from '@tanstack/react-query';
import * as t from './types';
export declare enum QueryKeys {
    messages = "messsages",
    allConversations = "allConversations",
    conversation = "conversation",
    searchEnabled = "searchEnabled",
    user = "user",
    endpoints = "endpoints",
    presets = "presets",
    searchResults = "searchResults",
    tokenCount = "tokenCount",
    availablePlugins = "availablePlugins",
    startupConfig = "startupConfig"
}
export declare const useAbortRequestWithMessage: () => UseMutationResult<void, Error, {
    endpoint: string;
    abortKey: string;
    message: string;
}>;
export declare const useGetUserQuery: (config?: UseQueryOptions<t.TUser>) => QueryObserverResult<t.TUser>;
export declare const useGetMessagesByConvoId: (id: string, config?: UseQueryOptions<t.TMessage[]>) => QueryObserverResult<t.TMessage[]>;
export declare const useGetConversationByIdQuery: (id: string, config?: UseQueryOptions<t.TConversation>) => QueryObserverResult<t.TConversation>;
export declare const useGetConversationByIdMutation: (id: string) => UseMutationResult<t.TConversation>;
export declare const useUpdateConversationMutation: (id: string) => UseMutationResult<t.TUpdateConversationResponse, unknown, t.TUpdateConversationRequest, unknown>;
export declare const useDeleteConversationMutation: (id?: string) => UseMutationResult<t.TDeleteConversationResponse, unknown, t.TDeleteConversationRequest, unknown>;
export declare const useClearConversationsMutation: () => UseMutationResult<unknown>;
export declare const useGetConversationsQuery: (pageNumber: string, config?: UseQueryOptions<t.TGetConversationsResponse>) => QueryObserverResult<t.TGetConversationsResponse>;
export declare const useGetSearchEnabledQuery: (config?: UseQueryOptions<boolean>) => QueryObserverResult<boolean>;
export declare const useGetEndpointsQuery: () => QueryObserverResult<t.TEndpoints>;
export declare const useCreatePresetMutation: () => UseMutationResult<t.TPreset[], unknown, t.TPreset, unknown>;
export declare const useUpdatePresetMutation: () => UseMutationResult<t.TPreset[], unknown, t.TPreset, unknown>;
export declare const useGetPresetsQuery: (config?: UseQueryOptions<t.TPreset[]>) => QueryObserverResult<t.TPreset[], unknown>;
export declare const useDeletePresetMutation: () => UseMutationResult<t.TPreset[], unknown, t.TPreset | object, unknown>;
export declare const useSearchQuery: (searchQuery: string, pageNumber: string, config?: UseQueryOptions<t.TSearchResults>) => QueryObserverResult<t.TSearchResults>;
export declare const useUpdateTokenCountMutation: () => UseMutationResult<t.TUpdateTokenCountResponse, unknown, string, unknown>;
export declare const useLoginUserMutation: () => UseMutationResult<t.TLoginResponse, unknown, t.TLoginUser, unknown>;
export declare const useRegisterUserMutation: () => UseMutationResult<unknown, unknown, t.TRegisterUser, unknown>;
export declare const useLogoutUserMutation: () => UseMutationResult<unknown>;
export declare const useRefreshTokenMutation: () => UseMutationResult<t.TRefreshTokenResponse, unknown, unknown, unknown>;
export declare const useRequestPasswordResetMutation: () => UseMutationResult<t.TRequestPasswordResetResponse, unknown, t.TRequestPasswordReset, unknown>;
export declare const useResetPasswordMutation: () => UseMutationResult<unknown, unknown, t.TResetPassword, unknown>;
export declare const useAvailablePluginsQuery: () => QueryObserverResult<t.TPlugin[]>;
export declare const useUpdateUserPluginsMutation: () => UseMutationResult<t.TUser, unknown, t.TUpdateUserPlugins, unknown>;
export declare const useGetStartupConfig: () => QueryObserverResult<t.TStartupConfig>;
