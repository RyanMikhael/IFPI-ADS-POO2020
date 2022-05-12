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


    void morrisInOrder(){
        ArvoreNo<T> *p = root, *tmp;
        while(p!=0){
            if(p->left == 0){
                visit(p);
                p = p->right;
            }
            else{
                tmp = p->left;
                while(tmp->right != 0 && tmp->right!= p){
                    tmp = tmp->right;
                }
                if(tmp->right==0){
                    tmp->right = p;
                    p = p->left;
                }
                else{
                    visit(p);
                    tmp->right = 0;

                }

                p = p->right;
            }
        }
    }
};


