# Storefront Theme

Tema default para novas lojas VTEX.

## Pré-requisitos

- node ([Linux](https://gist.github.com/isaacs/579814), [Mac and Windows](https://nodejs.org/download/))
- [git](http://git-scm.com/)
- `npm install -g vtex`

## Primeiros passos

### 1 - Instalando

Clone esse repositório e instale suas dependências:

```
git clone git@github.com:vtex-apps/storefront-theme.git
cd storefront-theme
npm install
```

### 2 - Iniciando o ambiente de desenvolvimento

Em um terminal no diretório deste repositório, inicie o comando:

```
vtex watch -w
```

Finalmente, acesse a URL de desenvolvimento apresentada pelo Toolbelt.

## FAQ

### Como desativar a minificação de arquivos

Adicione no fim da URL `?bundle=false`, por ex:

> [http://dreamstore.beta.myvtex.com/?bundle=false](http://dreamstore.beta.myvtex.com/?bundle=false)
