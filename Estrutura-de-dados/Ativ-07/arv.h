#ifndef ARV_H_INCLUDED
#define ARV_H_INCLUDED

typedef struct no{
    int valor;
    struct no *direita, *esquerda;
}NoArv;

void imprimirArvore(NoArv *raiz);

void emordem(NoArv *raiz);

void preordem(NoArv *raiz);

void posordem(NoaRV *raiz);

int qtdNos(NoArv *raiz)

#endif // ARV_H_INCLUDED
