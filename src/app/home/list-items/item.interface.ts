
export interface Post {
    createdAt: any,
    deletedAt: any,
    id: number,
    ownerId: number,
    parentCommentId?: string
    txt: string
}