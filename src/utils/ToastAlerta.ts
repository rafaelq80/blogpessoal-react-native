import { toast } from "sonner-native";

export function ToastAlerta(mensagem: string, tipo: string) {

    switch(tipo){
        case "sucesso":
            toast.success(mensagem,  {
                duration: 2000,
            });
        break;
        
        case "erro":
            toast.error(mensagem,  {
                duration: 2000, 
            });
        break;
        
        case "info":
        default:
            toast.info(mensagem,  {
                duration: 2000,
            });
        break;
    }

}