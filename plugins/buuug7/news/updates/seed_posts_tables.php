<?php

class SeedPostsTables extends \October\Rain\Database\Updates\Seeder
{
    public function run()
    {
        \Buuug7\News\Models\Post::create([
            'title' => 'First News Post',
            'slug' => 'first-news-post',
            'summary' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, itaque, cumque, maxime obcaecati reprehenderit ea dignissimos amet voluptatem id excepturi facilis totam veritatis maiores eveniet neque explicabo temporibus quisquam in ex ab fugiat ipsa tempore sunt corporis nostrum quam illum!',
            'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi culpa cumque dolorum, ex exercitationem fuga
   fugit mollitia nam optio, perferendis provident quidem quis ratione rerum saepe ullam vitae voluptate.</p>
<p>Ab accusantium alias aspernatur blanditiis commodi consequatur debitis dolores explicabo fugiat fugit hic ipsum
   laboriosam maxime nobis omnis pariatur quidem quod repellendus sequi sit soluta, tempora tenetur totam voluptates
   voluptatibus!</p>
<p>Aliquam asperiores assumenda at cumque, cupiditate dolor dolorum earum enim eos esse incidunt ipsa laborum magni
   nostrum obcaecati placeat ratione rem repellendus repudiandae sapiente sequi similique tenetur, ut voluptas
   voluptatibus.</p>
<p>A aliquam animi, consectetur deleniti deserunt eos id odit quae, quis repudiandae sapiente sed, sit soluta! Aliquam
   amet assumenda blanditiis dicta nemo odio optio, perspiciatis possimus ullam! Ex, pariatur, voluptatem.</p>
<p>In, quibusdam, voluptatem. Aut beatae consequuntur dolore doloremque, esse facere fuga fugit laborum, molestiae
   molestias, mollitia nobis officiis qui rem suscipit tenetur ut voluptas voluptatem. Beatae dolore hic odit quod.</p>
<p>A, atque consectetur, cumque dolor enim fuga harum hic inventore itaque iure iusto labore mollitia neque non odit
   perspiciatis quis, sed unde ut veniam? Aspernatur beatae dignissimos dolorem expedita quisquam.</p>
<p>Adipisci asperiores autem commodi consequatur consequuntur debitis dignissimos doloremque dolorum eius eveniet
   exercitationem, impedit magnam modi provident quae quibusdam quis quos ratione repellat tempore temporibus veniam
   voluptatum? Autem, cum, numquam.</p>
<p>Accusamus alias eaque nisi obcaecati optio saepe sit! Adipisci consequuntur dolorem eveniet explicabo, illum labore
   minus nobis omnis possimus quaerat, quo sed sint soluta tenetur velit. Earum libero quidem unde?</p>
<p>Amet atque dolorem earum exercitationem facere illum incidunt quasi quidem sunt voluptate. A dicta dignissimos
   dolores eaque eligendi id ipsam iure maiores nobis non, nulla quaerat tempore vel. Nostrum, similique.</p>
<p>A ab asperiores aut, beatae dolor illum iusto magnam minima obcaecati quas reprehenderit rerum similique temporibus?
   Dignissimos dolorem est ex mollitia quasi, suscipit vel. Ducimus explicabo illo repellat unde. Odio?</p>',
            'published' => true,
            'published_at' => \Carbon\Carbon::now(),
            'featured' => true,
        ]);

        \Buuug7\News\Models\Post::create([
            'title' => 'Second News Post',
            'slug' => 'second-news-post',
            'summary' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, itaque, cumque, maxime obcaecati reprehenderit ea dignissimos amet voluptatem id excepturi facilis totam veritatis maiores eveniet neque explicabo temporibus quisquam in',
            'content' => '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloremque dolores doloribus ex facere hic nobis qui
   rerum soluta temporibus. Assumenda eveniet iusto laboriosam magni modi nobis optio, saepe tempora!</p>
<p>Adipisci aliquam at expedita, ipsam officiis pariatur provident quia vel velit? At blanditiis consectetur corporis ea
   eaque enim facere hic iste laboriosam, libero modi numquam officiis quo, rem repudiandae! Perspiciatis!</p>
<p>Dolores eaque ex natus vel? A cumque eius fugit magnam, repudiandae vitae voluptates? Consectetur fugit illum quo
   suscipit tempore? Cumque deleniti dicta dolorem eius, eum id qui quis quisquam ratione!</p>
<p>Accusantium autem beatae consequatur deserunt distinctio dolores impedit ipsum nostrum quidem veniam? Ad aperiam
   corporis doloremque error nemo praesentium tenetur veritatis! Corporis doloribus ipsam libero molestiae molestias
   mollitia necessitatibus soluta.</p>
<p>A alias dolorem eligendi error explicabo illo itaque laudantium magnam maiores, molestiae natus officiis omnis
   perferendis placeat quasi quod sapiente sequi similique, sint soluta tempore tenetur velit vero voluptas,
   voluptates?</p>
<p>Ad assumenda atque eius eos inventore non officia optio quasi quo suscipit! Ad beatae ducimus fugiat iure nisi
   officia rerum! Id ipsum minus non officiis perferendis placeat quos saepe! Pariatur.</p>
<p>Accusamus blanditiis commodi dolore excepturi fuga hic illum inventore, ipsa labore libero maiores molestiae odio
   provident ratione rem repudiandae sit sunt suscipit temporibus voluptates! Commodi consectetur dicta dolor rem
   sapiente.</p>
<p>Ab aut consequatur dolorem eos fugiat incidunt ipsam laboriosam maxime minima, mollitia natus nulla provident
   similique soluta tempora velit veritatis voluptatibus. Autem dignissimos expedita explicabo laborum modi nisi quis
   repellendus.</p>',
            'published' => true,
            'published_at' => \Carbon\Carbon::now(),
            'featured' => true,
        ]);


    }
}
