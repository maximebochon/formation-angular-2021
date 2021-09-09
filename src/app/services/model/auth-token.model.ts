export interface AuthToken {
    id: string;
    ttl: number;
    created: Date;
    userId: number;
}