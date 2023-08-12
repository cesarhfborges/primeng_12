export interface Auth {
    access_token: string;
    token_type: string;
    expires_in: number;
    user: {
        id: number;
        nome: string;
        sobrenome: string;
        data_nasc: string;
        email: string;
        ativo: boolean;
        tipo: string;
        activation_token: string;
        remember_token: string;
        verificado_em: Date;
    };
}
