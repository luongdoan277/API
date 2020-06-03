<?php

namespace App\Providers;

use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Contracts\Auth\Authenticatable as UserContract;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Support\ServiceProvider;


class CustomUserProvider extends ServiceProvider implements UserProvider
{
    /**
     * Register services.
     *
     * @param UserContract $user
     * @param array $credentials
     * @return void
     * @property  hasher
     */
    public function validateCredentials(UserContract $user, array $credentials)
    {
        $plain = $credentials['password'];

        return $this->hasher->check($plain, $user->getAuthPassword());
    }
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //as
    }

    public function retrieveById($identifier)
    {
        // Implement retrieveById() method.
    }

    public function retrieveByToken($identifier, $token)
    {
        // Implement retrieveByToken() method.
    }

    public function updateRememberToken(UserContract $user, $token)
    {
        // Implement updateRememberToken() method.
    }

    public function retrieveByCredentials(array $credentials)
    {
        // Implement retrieveByCredentials() method.
    }
}
