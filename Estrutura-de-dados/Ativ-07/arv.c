#include <stdio.h>
#include <stdlib.h>
#include "arv.h"

void emordem(NoArv *raiz){
    if(raiz){
        emordem(raiz->esquerda);
        printf("%i ", raiz->valor);
        emordem(raiz->direita);
    }
}

void preordem(NoArv *raiz){
    if(raiz){
        printf("%i ", raiz->valor);
        preordem(raiz->esquerda);
        preordem(raiz->direita);
    }
}

void posordem(NoArv *raiz){
    if(raiz){
        posordem(raiz->esquerda);
        posordem(raiz->direita);
        printf("%i ", raiz->valor)
    }
}

int qtdNos(NoArv *raiz){
    if(raiz == NULL){
        return 0;
    }
    else{
        return 1 + qtdNos(raiz->esquerda) + qtdNos(raiz->direita);
    }
}
