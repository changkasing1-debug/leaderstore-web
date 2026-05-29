# Deploy Manual - Leader Store

## Problemas actuales
- El token de GitHub no funcionó (autenticación fallida)
- El push a GitHub no se puede hacer automáticamente desde el agente

## Solución simple: Deploy manual con Vercel CLI

### Opción 1: Deploy desde el Dashboard de Vercel (Recomendada)
1. Ve a https://vercel.com/dashboard
2. Crea un nuevo proyecto o usa el existente
3. Conecta tu repositorio de GitHub
4. Configura el proyecto:
   - **Framework Preset**: `Other` (no es un framework específico)
   - **Build Command**: (dejar en blanco - ya compilaste localmente)
   - **Output Directory**: `public`
5. Click "Deploy"

### Opción 2: Deploy con Vercel CLI
```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login (abre navegador)
vercel login

# 3. Deploy
vercel --prod

# 4. Cuando pregunte, selecciona:
#    - Set up and deploy? [Y/n] -> Y
#    - Which scope? -> tu-usuario
#    - Link to existing project? [y/N] -> N (si es nuevo)
#    - What's your project name? -> leader-store
#    - In which directory is your code located? -> ./
```

### Estructura actual del proyecto
```
public/
  index.html          <- Entry point
  assets/             <- JS/CSS compilados
  brands/             <- Imágenes de marcas
  products/           <- Imágenes de productos
  reviews/            <- Imágenes de reviews
  *.png, *.jpg, etc.  <- Assets estáticos
vercel.json           <- Config de rutas (rewrites)
```

### Configuración de vercel.json
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Nota importante
- No necesitas GitHub Actions
- No necesitas compilar de nuevo
- Los archivos en `public/` ya están listos para servir
- Solo necesitas subir la carpeta `public/` a Vercel
