<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/api/pokemon/{id}", name="pokemon")
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function getPokemon(int $id)
    { 
        $pokemon = file_get_contents('https://pokeapi.co/api/v2/pokemon/'.$id);
        $response = new Response();
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setContent($pokemon);
        return $response;  
    }
}
