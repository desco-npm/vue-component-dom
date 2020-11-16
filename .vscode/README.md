# bitbucket-markdown

# Sobre / About

Este pacote converte um arquivo *Markdown* comum para um novo arquivo no padrão do [Bitbucket](https://bitbucket.org/product/).

This package converts a common *Markdown* file to a new file in the [Bitbucket](https://bitbucket.org/product/) standard.

## Instalação / Install

```
const bitbucketMarkdown = require('@desco/bitbucket-markdown')
```

## Uso / To use

Chame o `bitbucketMarkdown` passando no primeiro parâmetro o endereço do arquivo *Markdown* puro e no segundo o endereço do arquivo *Markdown* a ser gerado no padrão do [Bitbucket](https://bitbucket.org/product/).

Call `bitbucketMarkdown` passing in the first parameter the address of the pure *Markdown* file and in the second the address of the *Markdown* file to be generated in the [Bitbucket](https://bitbucket.org/product/) standard.

```
bitbucketMarkdown('./README.md', './README_bitbucket.md')
```