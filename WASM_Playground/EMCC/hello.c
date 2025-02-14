#include <stdio.h>
#include <emscripten.h> // Gives access to certain tags in enscripten

EMSCRIPTEN_KEEPALIVE // Keeps functions alive while HTML is open, listens for function with JS
int addNums(int a, int b) {
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int main() {
    printf("Here your sum: %d\n", addNums(3, 5));

    return 0;
}