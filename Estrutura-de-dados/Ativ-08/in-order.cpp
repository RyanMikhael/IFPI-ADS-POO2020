#include <stdlib.h>
#include <iostream>


using namespace std;

template <class T>
class ArvoreNo{
public:
    T el;
    ArvoreNo<T> *left, *right;
    unsigned int sucessor = 1;
    ArvoreNo(){
        left=right=0;
    }
    ArvoreNo(T e, ArvoreNo<T> *l=0, ArvoreNo<T> *r =0){
        el = e;
        left = l;
        right = r;
        sucessor = 0;
    }
};


template <class T>
class Arvore{
protected:
    ArvoreNo<T> *root;

public:
    Arvore(){
        root = 0;
    }

    void insert(T el){
        ArvoreNo<T> *p=root,*prev=0, *novoNo;
        novoNo = new ArvoreNo<T>(el);
        if(root == 0){
            root = novoNo;
            return;
        }
        p = root;
        while(p != 0){
            prev = p;
            if(p->el > el){
                p = p->left;
            }
            else if(p->sucessor == 0){
                p = p->right;
            }
            else{
                break;
            }
        }
        if(prev->el > el){
            prev->left = novoNo;
            novoNo->sucessor = 1;
            novoNo->right = prev;
        }
        else if(prev->sucessor == 1){
            novoNo->sucessor = 1;
            prev->sucessor = 0;
            novoNo->right = prev->right;
            prev->right = novoNo;
        }
        else{
            prev->right = novoNo;
        }
    }

    void inOrder(){
        ArvoreNo<T> *prev, *p=root;
        if(p!=0){
            while(p->left != 0){
                p = p->left;
            }
            while(p!=0){
                visit(p);
                prev = p;
                p = p->right;
                if(p!=0 && prev->sucessor == 0){
                    while(p->left != 0){
                        p= p->left;
                    }
                }
            }
        }

    }
};
