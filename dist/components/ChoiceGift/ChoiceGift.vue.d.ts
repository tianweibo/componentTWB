interface FormState {
    name: string;
    typeName: any;
}
declare const _default: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    formState: FormState;
    giftTypeList: import("vue").Ref<{
        cdkeyMode: number;
        createAt: string;
        id: number;
        issueMode: number;
        name: string;
        sys: number;
        typeCode: string;
    }[]>;
    dialogTableVisible: import("vue").Ref<boolean>;
    allTotal: import("vue").Ref<number>;
    columns: ({
        title: string;
        name: string;
        dataIndex: string;
        key: string;
        slots: {
            customRender: string;
        };
    } | {
        title: string;
        dataIndex: string;
        key: string;
        name?: undefined;
        slots?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        slots: {
            customRender: string;
        };
        name?: undefined;
    })[];
    giftList: import("vue").Ref<{
        available: number;
        createAt: string;
        effectiveBegin: string;
        effectiveEnd: string;
        effectiveType: 0;
        id: number;
        invId: number;
        name: string;
        pictureUrl: string;
        showStatus: number;
        status: number;
        total: number;
        typeCode: string;
        typeId: number;
        typeName: string;
    }[]>;
    pagination: any;
    closeDialog: () => void;
    loading: import("vue").Ref<boolean>;
    handleSelectGift: (e: any, row: any) => void;
    requireGiftTypeList: () => void;
    reuiqreGiftList: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handChoice" | "closeDialog")[], "handChoice" | "closeDialog", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    onHandChoice?: ((...args: any[]) => any) | undefined;
    onCloseDialog?: ((...args: any[]) => any) | undefined;
}, {
    [x: number]: string;
} | {}>;
export default _default;
