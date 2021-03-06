<?php
namespace App\Controller;

use App\Controller\AppController;
use Cake\I18n\Time;
use Cake\Event\Event;

/**
 * Profile Controller
 */
class ProfilesController extends AppController
{
    public function initialize()
    {
        parent::initialize();
		    $this->loadModel('Users');
            $this->loadModel('Reminders');

    }

	public function beforeFilter(Event $event) {
        parent::beforeFilter($event);

        //$this->Auth->allow();
    }

    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index($id  = null)
    {
        if($id == null)
        {
            echo 'Error!';
        }

        $owner = $this->Users->get($id);

		$user = $this->Users->get($this->Auth->user('id'));

        $isOwner = ($owner->id == $user->id);

        $this->set(compact('user'));
        $this->set(compact('owner'));
        $this->set(compact('isOwner'));
        $this->set('_serialize', ['user', 'owner', 'isOwner']);
    }

    public function getReminders()
    {

        $user = $this->Users->get($this->Auth->user('id'), ['contain' => ['Reminders']]);

        $reminders = $user['reminders'];

        /*for ($i = 0; $i < 2; $i++)
        {
        $reminders[] = (object) [
          'title' => 'title' . ($i + 1),
          'description' => 'description' . ($i + 1),
          'remindOn' => Time::now()
        ];
    }*/

        $this->set('reminders', $reminders);
        $this->set('_serialize', ['reminders']);
    }

    public function addReminder()
    {
        $result = false;

        if ($this->request->is('post'))
        {
            $reminder = $this->Reminders->newEntity();

            $this->request->data['user_id'] = $this->Auth->user('id');
            $this->request->data['remindOn'] = Time::now();

            $reminder = $this->Reminders->patchEntity($reminder, $this->request->data);
            $result = $this->Reminders->save($reminder);
        }

        $this->set('result', $result);
        $this->set('_serialize', ['result']);
    }

    /*public function deleteReminder()
    {
        $result = false;

        if ($this->request->is('post'))
        {
            $reminder = $this->Reminders->newEntity();

            $this->request->data['user_id'] = $this->Auth->user('id');

            $reminder = $this->Reminders->patchEntity($reminder, $this->request->data);
            $result = $this->Reminders->delete($reminder);
        }

        $this->set('result', $result);
        $this->set('_serialize', ['result']);
    }*/
}
