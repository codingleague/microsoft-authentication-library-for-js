import { AuthorityType } from "./AuthorityType";
import { IUri } from "./../url/IUri";
import { INetworkModule } from "./../network/INetworkModule";
/**
 * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
 * endpoint. It will store the pertinent config data in this object for use during token calls.
 */
export declare class Authority {
    private _canonicalAuthority;
    private _canonicalAuthorityUrlComponents;
    private tenantDiscoveryResponse;
    protected networkInterface: INetworkModule;
    get authorityType(): AuthorityType;
    /**
     * A URL that is the authority set by the developer
     */
    get canonicalAuthority(): string;
    /**
     * Sets canonical authority.
     */
    set canonicalAuthority(url: string);
    /**
     * Get authority components.
     */
    get canonicalAuthorityUrlComponents(): IUri;
    /**
     * Get tenant for authority.
     */
    get tenant(): string;
    /**
     * OAuth /authorize endpoint for requests
     */
    get authorizationEndpoint(): string;
    /**
     * OAuth /token endpoint for requests
     */
    get tokenEndpoint(): string;
    get deviceCodeEndpoint(): string;
    /**
     * OAuth logout endpoint for requests
     */
    get endSessionEndpoint(): string;
    /**
     * OAuth issuer for requests
     */
    get selfSignedJwtAudience(): string;
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */
    private replaceTenant;
    /**
     * The default open id configuration endpoint for any canonical authority.
     */
    protected get defaultOpenIdConfigurationEndpoint(): string;
    constructor(authority: string, networkInterface: INetworkModule);
    /**
     * Boolean that returns whethr or not tenant discovery has been completed.
     */
    discoveryComplete(): boolean;
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     * @param openIdConfigurationEndpoint
     */
    private discoverEndpoints;
    private get aadInstanceDiscoveryEndpointUrl();
    private validateAndSetPreferredNetwork;
    /**
     * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
     */
    resolveEndpointsAsync(): Promise<void>;
}