#include <iostream>
#include <math.h>
using namespace std;

void bilang(int kolom, int baris)
{
    int prima[kolom * baris];

    int i = 2;
    int batas = 0;

    while (batas < kolom * baris)
    {
        int jml = 0;
        for (int j = 2; j <= sqrt(i); j++)
        {
            if (i % j == 0)
                jml++;
        }
        if (jml == 0)
        {
            prima[batas] = i;
            batas++;
        }

        i++;
    }

    int index = 0;
    for (int i = 0; i < baris; i++)
    {
        for (int j = 0; j < kolom; j++)
        {
            cout << prima[index] << ", ";
            index++;
        }
        cout << endl;
    }
}

int main()
{
    bilang(4, 3);
}