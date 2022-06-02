#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

template <class T>
class ArvoreNo{
public:
    T el;
    ArvoreNo<T> *left, *right;
    ArvoreNo(){
        left=right=0;
    }
    ArvoreNo(T e, ArvoreNo<T> *l=0, ArvoreNo<T> *r =0){
        el = e;
        left = l;
        right = r;
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
        ArvoreNo<T> *p=root,*prev=0;
        while(p!=0){
            prev=p;
            if(el < p ->el){
                p=p->left;
            }
            else{
                p=p->right;
            }
        }
        if(root == 0){
            root = new ArvoreNo<T>(el);
        }
        else if( el < prev -> el){
            prev-> left = new ArvoreNo<T>(el);
        }
        else{
            prev -> right = new ArvoreNo<T>(el);
        }
    }




    int altura(ArvoreNo<T> *root){
        if(root == NULL){
            return 0;
        }
        else{
            int l = altura(root->left);
            int r = altura(root->right);
            if(l > r){
                return l + 1;
            }
            else{
                return r + 1;
            }
        }
    }

    void imprime(ArvoreNo<T> *n){
        if(root == NULL){
            cout<<"\nVazio";
        }
        else{
            if(n!= NULL){
                cout<<"<"<<n->el;
                imprime(n->left);
                imprime(n->right);
                cout<<">";
            }
            else{
                cout<<"<>";
            }
        }
    }

    ArvoreNo<T>* getRaiz(){
        return root;
    }



};



int main(){
    Arvore<int> arv;
    arv.insert(8);
    arv.insert(20);
    arv.insert(25);
    arv.insert(14);
    arv.insert(32);
    arv.insert(30);
    arv.insert(28);
    arv.insert(31);
    arv.insert(40);

    int h = arv.altura(arv.getRaiz());
    cout << "A altura da arvore e " << h << endl << endl;
    arv.imprime(arv.getRaiz());
    cout << endl << "A arvore resultante nao esta balanceada!" << endl;
}
