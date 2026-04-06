/**
 * Servicio de API básico para interactuar con los servicios externos
 */

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export const apiService = {
    /**
     * Ejemplo de envío de formulario de contacto
     */
    async sendContactForm(data: ContactMessage) {
        try {
            console.log(`[API] Enviando mensaje a ${API_URL}...`, data);

            // Simulamos una petición fetch
            // En un entorno real, descomentarías el siguiente bloque:
            /*
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify(data)
            });
            return await response.json();
            */

            // Simulamos respuesta exitosa para pruebas
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { success: true, message: "Mensaje enviado correctamente" };
        } catch (error) {
            console.error("[API Error]", error);
            throw error;
        }
    },

    /**
     * Función para probar la salud de la conexión
     */
    async checkConnection() {
        if (!API_URL || !API_KEY) {
            return { status: "error", message: "Variables de entorno no configuradas" };
        }
        return { status: "ok", url: API_URL };
    }
};
