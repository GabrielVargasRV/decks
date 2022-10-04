

export type DeckItemType = {
    title: string;
    notesCount: number;
    handleOnClick?: () => void;
};

export type DeckType = {
    name: string;
    id: string;
    createdTimeStamp: number;
    cards: any[];
}

export type CardType = {
    front: string;
    back: string;
    lastReview: number;
    nextReviewIn: number;
    createdOn: number;
    id: string;
    fatherId: string;
}