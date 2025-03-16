const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.use(express.json());

// Endpoint para chamar a API do Grok 3
app.post('/api/grok', async (req, res) => {
    const { prompt } = req.body;
    try {
        // Chamada à API do Grok 3 (simulada, pois a API real requer autenticação)
        const response = await axios.post('https://api.x.ai/v1/sampler/sample', {
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 200
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.XAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json({ response: response.data.text });
    } catch (error) {
        // Simulação de resposta para demonstração
        const simulatedResponse = `Entendi sua dúvida sobre "${prompt}". Vou te guiar para a galáxia certa!`;
        res.json({ response: simulatedResponse });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));